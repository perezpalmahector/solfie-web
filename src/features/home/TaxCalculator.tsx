import { useState } from "react";

/**
 * ⚠️ IMPORTANTE:
 * Esta calculadora es informativa.
 * No sustituye cálculo oficial del SAT.
 */

type Result = {
  gross: number;
  deductions: number;
  taxable: number;
  tax: number;
  net: number;
  rate: number;
};

type Regime = "fisica" | "moral" | "resico";

type ISRRange = {
  min: number;
  max: number;
  fixed: number;
  rate: number;
};

/**
 * 📊 ISR mensual simplificado (referencial)
 */
const isrTable: ISRRange[] = [
  { min: 0, max: 7735, fixed: 0, rate: 0.0192 },
  { min: 7735.01, max: 65551.07, fixed: 148.51, rate: 0.064 },
  { min: 65551.08, max: 115375.9, fixed: 3855.14, rate: 0.1088 },
  { min: 115375.91, max: 134119.41, fixed: 9265.2, rate: 0.16 },
  { min: 134119.42, max: 160577.65, fixed: 12264.16, rate: 0.1792 },
  { min: 160577.66, max: 323862, fixed: 15049.49, rate: 0.2136 },
  { min: 323862.01, max: Infinity, fixed: 50120.35, rate: 0.35 },
];

export default function TaxCalculator() {
  const [income, setIncome] = useState<string>("");
  const [deductions, setDeductions] = useState<string>("0");
  const [regime, setRegime] = useState<Regime>("fisica");
  const [result, setResult] = useState<Result | null>(null);

  const calculateISR = (value: number) => {
    const range = isrTable.find(
      (r) => value >= r.min && value <= r.max
    );

    if (!range) return 0;

    const excedente = value - range.min;
    return range.fixed + excedente * range.rate;
  };

  const calculate = () => {
    const gross = Number(income);
    const ded = Number(deductions || 0);

    if (!gross || gross <= 0) {
      setResult(null);
      return;
    }

    const taxable = Math.max(gross - ded, 0);

    let tax = 0;
    let rate = 0;

    // 🧾 PERSONA FÍSICA (ISR progresivo realista)
    if (regime === "fisica") {
      tax = calculateISR(taxable);
      rate = taxable > 0 ? (tax / taxable) * 100 : 0;
    }

    // 🏢 PERSONA MORAL (simplificado pero estructurado)
    if (regime === "moral") {
      const baseRate = 0.30;
      tax = taxable * baseRate;
      rate = baseRate * 100;
    }

    // 🟢 RESICO (régimen simplificado)
    if (regime === "resico") {
      let resicoRate = 0.0125;

      if (taxable > 30000) resicoRate = 0.025;
      if (taxable > 100000) resicoRate = 0.032;

      tax = taxable * resicoRate;
      rate = resicoRate * 100;
    }

    setResult({
      gross,
      deductions: ded,
      taxable,
      tax: Number(tax.toFixed(2)),
      net: Number((taxable - tax).toFixed(2)),
      rate: Number(rate.toFixed(2)),
    });
  };

  return (
    <section id="calculadora" className="py-20 bg-gray-50">
    <div className="max-w-md mx-auto bg-white border rounded-2xl shadow-lg p-6 space-y-4">

      <h3 className="text-lg font-bold text-slate-900">
        🧮 Calculadora Fiscal México (estimación)
      </h3>

      {/* REGIMEN */}
      <div className="flex flex-wrap gap-2">
        {(["fisica", "moral", "resico"] as Regime[]).map((r) => (
          <button
            key={r}
            onClick={() => setRegime(r)}
            className={`px-3 py-1 rounded-lg border text-sm ${
              regime === r ? "bg-black text-white" : ""
            }`}
          >
            {r === "fisica" && "Física"}
            {r === "moral" && "Moral"}
            {r === "resico" && "RESICO"}
          </button>
        ))}
      </div>

      {/* INPUT INGRESO */}
      <input
        type="number"
        placeholder="Ingreso mensual MXN"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />

      {/* DEDUCCIONES */}
      <input
        type="number"
        placeholder="Deducciones (opcional)"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />

      {/* BOTÓN */}
      <button
        onClick={calculate}
        className="w-full bg-[#B3202D] text-white py-2 rounded-lg"
      >
        Calcular
      </button>

      {/* RESULTADO */}
      {result && (
        <div className="text-sm border-t pt-3 space-y-1">

          <p>💰 Ingreso: ${result.gross}</p>
          <p>📉 Deducciones: ${result.deductions}</p>
          <p className="text-slate-700">
            📊 Base gravable: ${result.taxable}
          </p>

          <p className="text-red-600 font-semibold">
            💸 ISR estimado: ${result.tax}
          </p>

          <p className="text-green-700 font-semibold">
            💰 Neto aproximado: ${result.net}
          </p>

          <p className="text-xs text-slate-500">
            📊 Tasa efectiva: {result.rate}%
          </p>

          <p className="mt-3 text-[10px] text-gray-400 leading-4">
            ⚠️ Estimación informativa basada en tablas ISR simplificadas.
            No constituye cálculo fiscal oficial del SAT.
          </p>

        </div>
      )}
    </div>
    </section>
  );
}