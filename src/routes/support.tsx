import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ShieldAlert,
  Headphones,
  FileEdit,
  RotateCw,
  Building2,
  HandCoins,
  Upload,
  Check,
  ArrowLeft,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@/components/site/Container";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Existing client support — Constellation Financial Services" },
      { name: "description", content: "Reach the right team — claims, customer service, amendments, renewals or commercial." },
    ],
  }),
  component: SupportPage,
});

const departments = [
  { id: "claims", icon: ShieldAlert, title: "Claims", desc: "Open or follow up on a claim." },
  { id: "service", icon: Headphones, title: "Customer service", desc: "General queries and account support." },
  { id: "amendments", icon: FileEdit, title: "Amendments", desc: "Update vehicles, drivers or cover details." },
  { id: "renewals", icon: RotateCw, title: "Renewals", desc: "Review or renew your existing policy." },
  { id: "commercial", icon: Building2, title: "Commercial", desc: "Business and fleet account support." },
  { id: "sales", icon: HandCoins, title: "Sales", desc: "New cover or additional products." },
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Required").max(80),
  email: z.string().email("Enter a valid email").max(120),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  policyNumber: z.string().max(40).optional().or(z.literal("")),
  subject: z.string().min(2, "Required").max(120),
  message: z.string().min(10, "Please add some detail").max(2000),
});

type Form = z.infer<typeof schema>;

function SupportPage() {
  const [dept, setDept] = useState<(typeof departments)[number]["id"] | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(() => setSubmitted(true));

  const reset_ = () => {
    setDept(null);
    setFiles([]);
    setSubmitted(false);
    reset();
  };

  const active = departments.find((d) => d.id === dept);

  return (
    <PageShell
      eyebrow="Existing client support"
      title={
        <>
          Reach the right team,
          <br />
          <span className="italic text-[color:var(--gold-soft)]">first time</span>.
        </>
      }
      intro="Choose your department below. Your message reaches the consultant best placed to help — not a generic inbox."
    >
      <Container className="pb-32 pt-12">
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {!dept && (
              <motion.div
                key="picker"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {departments.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDept(d.id)}
                    className="group relative overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-7 text-left transition-all hover:border-[color:var(--gold)]/40"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[color:var(--gold)]/0 blur-3xl transition-all duration-700 group-hover:bg-[color:var(--gold)]/15" />
                    <div className="relative">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/[0.08]">
                        <d.icon className="h-5 w-5 text-[color:var(--gold)]" />
                      </div>
                      <h3 className="mt-6 text-lg text-foreground">{d.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {dept && !submitted && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => setDept(null)}
                  className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" /> Choose a different team
                </button>

                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-8 sm:p-10"
                >
                  <div className="mb-8 flex items-center gap-4 border-b border-[color:var(--hairline)] pb-6">
                    {active && (
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/[0.08]">
                        <active.icon className="h-5 w-5 text-[color:var(--gold)]" />
                      </span>
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Department</p>
                      <p className="font-display text-xl text-foreground">{active?.title}</p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Sf label="Full name" error={formState.errors.fullName?.message}>
                      <input className={inp} {...register("fullName")} />
                    </Sf>
                    <Sf label="Email" error={formState.errors.email?.message}>
                      <input className={inp} {...register("email")} />
                    </Sf>
                    <Sf label="Phone" error={formState.errors.phone?.message}>
                      <input className={inp} {...register("phone")} />
                    </Sf>
                    <Sf label="Policy number (optional)" error={formState.errors.policyNumber?.message}>
                      <input className={inp} placeholder="If you have one to hand" {...register("policyNumber")} />
                    </Sf>
                    <div className="sm:col-span-2">
                      <Sf label="Subject" error={formState.errors.subject?.message}>
                        <input className={inp} {...register("subject")} />
                      </Sf>
                    </div>
                    <div className="sm:col-span-2">
                      <Sf label="Message" error={formState.errors.message?.message}>
                        <textarea rows={5} className={inp} {...register("message")} />
                      </Sf>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Documents (optional)
                      </p>
                      <label
                        htmlFor="docs"
                        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[color:var(--hairline)] bg-background/30 px-6 py-10 text-center transition-colors hover:border-[color:var(--gold)]/40"
                      >
                        <Upload className="h-5 w-5 text-[color:var(--gold)]" />
                        <p className="text-sm text-foreground">Drag files or click to upload</p>
                        <p className="text-xs text-muted-foreground">
                          Photos, PDFs and supporting documents · Max 10MB each
                        </p>
                        <input
                          id="docs"
                          type="file"
                          multiple
                          className="sr-only"
                          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                        />
                      </label>
                      {files.length > 0 && (
                        <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                          {files.map((f) => (
                            <li key={f.name}>· {f.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-end border-t border-[color:var(--hairline)] pt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)]"
                    >
                      Send to {active?.title} <Check className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {submitted && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[color:var(--gold)]/30 bg-gradient-to-b from-[color:var(--gold)]/[0.08] to-[color:var(--surface-elevated)] p-10 text-center"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15">
                  <Check className="h-6 w-6 text-[color:var(--gold)]" />
                </div>
                <h2 className="mt-6 font-display text-3xl text-foreground">We've got it.</h2>
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
                  Your message is with our {active?.title.toLowerCase()} team. A consultant will be
                  in touch during office hours.
                </p>
                <button
                  onClick={reset_}
                  className="mt-8 text-sm text-[color:var(--gold)] underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </PageShell>
  );
}

const inp =
  "w-full rounded-lg border border-[color:var(--hairline)] bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]";

function Sf({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
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
