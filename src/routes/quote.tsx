import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Car, Truck, Layers, Building2, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@/components/site/Container";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a quote — Constellation Financial Services" },
      { name: "description", content: "Submit your insurance enquiry and a real consultant will prepare tailored cover options." },
    ],
  }),
  component: QuotePage,
});

const schema = z.object({
  insuranceType: z.enum(["personal", "commercial", "fleet", "property"], {
    message: "Please select an insurance type",
  }),
  vehicleMake: z.string().min(1, "Required").max(60),
  vehicleModel: z.string().min(1, "Required").max(60),
  vehicleYear: z.string().regex(/^\d{4}$/, "Enter a valid year"),
  financed: z.enum(["financed", "cash"]),
  use: z.enum(["personal", "business"]),
  driverAge: z.string().regex(/^\d{2,3}$/, "Enter a valid age"),
  licenseYears: z.string().min(1, "Required").max(2),
  claimsHistory: z.enum(["none", "one", "multiple"]),
  currentInsurer: z.string().max(80).optional().or(z.literal("")),
  fullName: z.string().min(2, "Required").max(80),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  email: z.string().email("Enter a valid email").max(120),
  notes: z.string().max(800).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const types = [
  { id: "personal", icon: Car, title: "Personal vehicle", desc: "Cover for your own car or family vehicles." },
  { id: "commercial", icon: Truck, title: "Commercial vehicle", desc: "Single or multiple vehicles used for business." },
  { id: "fleet", icon: Layers, title: "Fleet insurance", desc: "Multi-vehicle operational cover with fleet structure." },
  { id: "property", icon: Building2, title: "Property", desc: "Residential or commercial property cover." },
] as const;

function QuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      insuranceType: undefined,
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      financed: "cash",
      use: "personal",
      driverAge: "",
      licenseYears: "",
      claimsHistory: "none",
      currentInsurer: "",
      fullName: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const totalSteps = 4;

  const stepFields: (keyof FormData)[][] = [
    ["insuranceType"],
    ["vehicleMake", "vehicleModel", "vehicleYear", "financed", "use"],
    ["driverAge", "licenseYears", "claimsHistory", "currentInsurer"],
    ["fullName", "phone", "email", "notes"],
  ];

  const next = async () => {
    const valid = await methods.trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = methods.handleSubmit(() => {
    // Frontend prototype: simulate a successful submission
    setSubmitted(true);
  });

  return (
    <PageShell
      eyebrow="Get a quote"
      title={
        <>
          Tell us what you need protected.
          <br />
          <span className="italic text-[color:var(--gold-soft)]">
            A consultant takes it from there.
          </span>
        </>
      }
      intro="Four short steps. No login. Your enquiry goes directly to a consultant — not a queue."
    >
      <Container className="pb-32 pt-12">
        <div className="mx-auto max-w-3xl">
          {!submitted ? (
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <Progress current={step} total={totalSteps} />

                <div className="mt-10 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-8 sm:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {step === 0 && <StepType />}
                      {step === 1 && <StepVehicle />}
                      {step === 2 && <StepDriver />}
                      {step === 3 && <StepContact />}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 flex items-center justify-between border-t border-[color:var(--hairline)] pt-6">
                    <button
                      type="button"
                      onClick={prev}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>

                    {step < totalSteps - 1 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)]"
                      >
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)]"
                      >
                        Submit enquiry <Check className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </FormProvider>
          ) : (
            <SuccessCard />
          )}
        </div>
      </Container>
    </PageShell>
  );
}

function Progress({ current, total }: { current: number; total: number }) {
  const labels = ["Insurance type", "Vehicle", "Driver", "Contact"];
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="uppercase tracking-[0.2em]">
          Step {current + 1} <span className="text-foreground/30">of {total}</span>
        </span>
        <span className="text-foreground/70">{labels[current]}</span>
      </div>
      <div className="mt-3 h-px w-full bg-[color:var(--hairline)]">
        <motion.div
          initial={false}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-[color:var(--gold)]"
        />
      </div>
    </div>
  );
}

function StepHeader({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-[color:var(--hairline)] bg-background/60 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]";

function StepType() {
  const { setValue, watch, formState } = useFormContext<FormData>();
  const value = watch("insuranceType");
  const err = formState.errors.insuranceType?.message;
  return (
    <div>
      <StepHeader title="What would you like to insure?" hint="Pick the option closest to your need — your consultant will refine details with you." />
      <div className="grid gap-3 sm:grid-cols-2">
        {types.map((t) => {
          const active = value === t.id;
          return (
            <button
              type="button"
              key={t.id}
              onClick={() => setValue("insuranceType", t.id, { shouldValidate: true })}
              className={`group relative flex items-start gap-4 rounded-xl border p-5 text-left transition-all ${
                active
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/[0.06]"
                  : "border-[color:var(--hairline)] bg-background/40 hover:border-foreground/20"
              }`}
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${
                  active
                    ? "border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15"
                    : "border-[color:var(--hairline)]"
                }`}
              >
                <t.icon className={`h-5 w-5 ${active ? "text-[color:var(--gold)]" : "text-foreground/70"}`} />
              </span>
              <div className="flex-1">
                <p className="text-sm text-foreground">{t.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
              </div>
              {active && (
                <Check className="h-4 w-4 text-[color:var(--gold)]" />
              )}
            </button>
          );
        })}
      </div>
      {err && <p className="mt-3 text-xs text-destructive">{err}</p>}
    </div>
  );
}

function StepVehicle() {
  const { register, formState, watch, setValue } = useFormContext<FormData>();
  const e = formState.errors;
  const financed = watch("financed");
  const use = watch("use");
  return (
    <div>
      <StepHeader title="Vehicle information" hint="A few quick details so your consultant can benchmark options." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Make" error={e.vehicleMake?.message}>
          <input className={inputCls} placeholder="e.g. Toyota" {...register("vehicleMake")} />
        </Field>
        <Field label="Model" error={e.vehicleModel?.message}>
          <input className={inputCls} placeholder="e.g. Hilux" {...register("vehicleModel")} />
        </Field>
        <Field label="Year" error={e.vehicleYear?.message}>
          <input className={inputCls} placeholder="e.g. 2022" inputMode="numeric" {...register("vehicleYear")} />
        </Field>
        <Field label="Financed or cash">
          <Segmented
            value={financed}
            onChange={(v) => setValue("financed", v as "financed" | "cash", { shouldValidate: true })}
            options={[
              { v: "financed", label: "Financed" },
              { v: "cash", label: "Cash" },
            ]}
          />
        </Field>
        <Field label="Personal or business use">
          <Segmented
            value={use}
            onChange={(v) => setValue("use", v as "personal" | "business", { shouldValidate: true })}
            options={[
              { v: "personal", label: "Personal" },
              { v: "business", label: "Business" },
            ]}
          />
        </Field>
      </div>
    </div>
  );
}

function StepDriver() {
  const { register, formState, watch, setValue } = useFormContext<FormData>();
  const e = formState.errors;
  const claims = watch("claimsHistory");
  return (
    <div>
      <StepHeader title="Driver information" hint="This helps us match you with the right insurer underwriting profile." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Driver age" error={e.driverAge?.message}>
          <input className={inputCls} placeholder="e.g. 34" inputMode="numeric" {...register("driverAge")} />
        </Field>
        <Field label="Years licensed" error={e.licenseYears?.message}>
          <input className={inputCls} placeholder="e.g. 12" inputMode="numeric" {...register("licenseYears")} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Claims history (last 3 years)">
            <Segmented
              value={claims}
              onChange={(v) => setValue("claimsHistory", v as FormData["claimsHistory"], { shouldValidate: true })}
              options={[
                { v: "none", label: "No claims" },
                { v: "one", label: "One claim" },
                { v: "multiple", label: "Multiple" },
              ]}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Current insurer (optional)" error={e.currentInsurer?.message}>
            <input className={inputCls} placeholder="e.g. Discovery Insure" {...register("currentInsurer")} />
          </Field>
        </div>
      </div>
    </div>
  );
}

function StepContact() {
  const { register, formState } = useFormContext<FormData>();
  const e = formState.errors;
  return (
    <div>
      <StepHeader title="How can we reach you?" hint="A consultant will contact you during office hours, typically within a short turnaround." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={e.fullName?.message}>
          <input className={inputCls} placeholder="Your name" {...register("fullName")} />
        </Field>
        <Field label="Phone" error={e.phone?.message}>
          <input className={inputCls} placeholder="+27 ..." {...register("phone")} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Email" error={e.email?.message}>
            <input className={inputCls} placeholder="you@example.com" {...register("email")} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Notes (optional)" error={e.notes?.message}>
            <textarea
              rows={4}
              className={inputCls}
              placeholder="Anything specific you'd like your consultant to know."
              {...register("notes")}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

function Segmented({
  value,
  onChange,
  options,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
  options: { v: string; label: string }[];
}) {
  return (
    <div className="inline-flex w-full overflow-hidden rounded-lg border border-[color:var(--hairline)] bg-background/40 p-1">
      {options.map((o) => {
        const active = value === o.v;
        return (
          <button
            key={o.v}
            type="button"
            onClick={() => onChange(o.v)}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm transition-colors ${
              active
                ? "bg-[color:var(--gold)]/15 text-[color:var(--gold)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function SuccessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-[color:var(--gold)]/30 bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--surface-elevated)] p-10 text-center"
    >
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15">
        <Check className="h-6 w-6 text-[color:var(--gold)]" />
      </div>
      <h2 className="mt-6 font-display text-3xl text-foreground">Enquiry received.</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Your enquiry has been sent directly to a consultant. Quotes are typically prepared during
        office hours within a short turnaround time.
      </p>
    </motion.div>
  );
}
