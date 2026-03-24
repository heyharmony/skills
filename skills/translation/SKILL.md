---
name: "Translate Meeting Transcript"
description: "Translate meeting transcripts, summaries, or action items into a target language — preserve tone, structure, and speaker attribution. Trigger on: translate, translation, convert to Spanish, in French, translate transcript, translate this summary, meeting in another language."
dependencies: []
---

## Purpose

Makes Harmony conversation content accessible across languages. Translates transcripts, meeting summaries, action items, or any conversation-derived content into the target language — preserving the original tone, structure, and speaker attribution so nothing gets lost.

## When to Use

- A meeting was conducted in English but stakeholders in another region need the summary in their language.
- A multilingual team needs action items from a call translated for local teams.
- A client-facing recap needs to be delivered in the client's preferred language.
- A transcript contains mixed languages and needs to be unified into a single target language.

## Instructions

1. **Pull the data** — Retrieve the relevant Harmony content: full transcript, meeting summary, action items, or a specific excerpt the user provides.
2. **Process** — Confirm the target language. Match tone to the original content (formal stays formal, casual stays casual) unless the user specifies otherwise. Preserve: speaker names and attribution, timestamps and references, structural formatting (tables, bullets, headings), proper nouns and product names that should remain untranslated.
3. **Format the output** — Return the translated content in the same structural format as the original, with a header noting source and target languages. Include translation notes for any terms left untranslated or cultural adaptations made.
4. **Deliver** — Return in chat, post to a Harmony Note, or push via integration.

## Output Format

```markdown
### Translation — [Content Type]

**Source language:** [Language]
**Target language:** [Language]
**Source:** [Meeting title + date, or content description]

---

[Translated content, preserving original structure and formatting]

---

**Translation notes:** [Any terms left untranslated, cultural adaptations made, or ambiguities flagged]
```

## Example

**Input:** User provides a meeting summary from a sprint retro (English) and requests translation to Spanish, formal tone.

**Output:**

```markdown
### Translation — Meeting Summary

**Source language:** English
**Target language:** Spanish
**Source:** Sprint 14 Retro, 2026-03-04

---

### Resumen de Reunión — Retro Sprint 14, 2026-03-04

**Asistentes:** Maya, Ravi, Chen, Priya, Leo
**Duración:** 28 min

#### Decisiones
| # | Decisión | Propuesta por | Contexto |
|---|----------|---------------|----------|
| 1 | Pasar a sprints de 2 semanas a partir del próximo ciclo | Ravi | "Dos semanas nos dan ciclos de retroalimentación más cortos — creo que entregamos más rápido." (04:32) |
| 2 | Incluir un ticket de deuda técnica en cada sprint | Chen | "Seguimos posponiendo esto. Hagámoslo obligatorio." (18:10) |

#### Elementos de Acción
| # | Tarea | Responsable | Fecha límite | Fuente |
|---|-------|-------------|--------------|--------|
| 1 | Redactar propuesta de nueva cadencia de sprints | Ravi | 2026-03-07 | (04:55) |
| 2 | Crear etiqueta de deuda técnica en Linear | Chen | 2026-03-05 | (18:45) |
| 3 | Compartir resumen de la retro con stakeholders | Maya | 2026-03-04 | (26:00) |

#### Puntos Clave de Discusión
- **Velocidad del sprint** — Leo señaló que la velocidad bajó un 15% en este sprint debido a trabajo de soporte no planificado. El equipo acordó reservar un 20% de capacidad para interrupciones.
- **Cuello de botella en QA** — Priya indicó que los PRs permanecen en revisión más de 2 días. El equipo probará un horario diario de revisión a las 10am.

#### Preguntas Abiertas
- ¿Deberíamos invitar a Producto a las retros? (planteado por Maya, sin consenso)

#### Sentimiento
Constructivo y con energía. El equipo está alineado en el cambio de cadencia; tensión leve en torno al backlog de deuda técnica, pero resuelta con una acción clara.

---

**Translation notes:** "Stakeholders" retained in English — widely used in Spanish business contexts. Speaker names and tool names (Linear) left untranslated. Timestamps preserved from original.
```

## Edge Cases

- **Source language not specified:** Auto-detect from the content. If confidence is low, ask the user to confirm before translating.
- **Mixed-language transcript:** Translate all segments into the single target language. Note which segments were originally in which language.
- **Technical jargon or product names:** Keep product names, brand names, and widely-adopted technical terms (API, sprint, PR) untranslated. Flag ambiguous terms in translation notes.
- **Content with quoted speech:** Translate the quotes but preserve the original in parentheses if the user requests bilingual output.
- **Target language not supported or unclear:** Ask the user to clarify. Do not guess or default.
