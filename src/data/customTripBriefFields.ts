export type BriefFieldType = "number" | "text" | "select" | "textarea" | "checkbox";

export type BriefField = {
  id: string;
  type: BriefFieldType;
  labelKey: string;
  placeholderKey?: string;
  hintKey?: string;
  /** Texto informativo (p. ej. aviso legal) mostrado encima del control */
  noticeKey?: string;
  required?: boolean;
  options?: { value: string; labelKey: string }[];
  defaultValue?: string;
  fullWidth?: boolean;
  min?: number;
  max?: number;
};

const budgetHintKey = "custom_budget_hint";

const priorityOptions: BriefField["options"] = [
  { value: "relax", labelKey: "custom_priority_relax" },
  { value: "adventure", labelKey: "custom_priority_adventure" },
  { value: "hotels", labelKey: "custom_priority_hotels" },
  { value: "premium", labelKey: "custom_priority_premium" },
  { value: "balanced", labelKey: "custom_priority_balanced" },
  { value: "all_inclusive", labelKey: "custom_priority_all_inclusive" }
];

const budgetOptions: BriefField["options"] = [
  { value: "3000-5000", labelKey: "custom_budget_3k" },
  { value: "5000-8000", labelKey: "custom_budget_5k" },
  { value: "8000-12000", labelKey: "custom_budget_8k" },
  { value: "12000+", labelKey: "custom_budget_12k" },
  { value: "unsure", labelKey: "custom_budget_unsure" }
];

const decorOptions: BriefField["options"] = [
  { value: "full", labelKey: "custom_decor_full" },
  { value: "basic", labelKey: "custom_decor_basic" },
  { value: "none", labelKey: "custom_decor_none" }
];

const weddingBudgetTotalOptions: BriefField["options"] = [
  { value: "150k-300k", labelKey: "custom_wedding_budget_150k" },
  { value: "300k-500k", labelKey: "custom_wedding_budget_300k" },
  { value: "500k-800k", labelKey: "custom_wedding_budget_500k" },
  { value: "800k-1200k", labelKey: "custom_wedding_budget_800k" },
  { value: "1200k+", labelKey: "custom_wedding_budget_1200k" },
  { value: "unsure", labelKey: "custom_budget_unsure" }
];

export const customTripBriefFields: Record<string, BriefField[]> = {
  grupales: [
    {
      id: "people",
      type: "number",
      labelKey: "custom_field_people",
      defaultValue: "8",
      required: true,
      min: 5
    },
    {
      id: "group_vibe",
      type: "select",
      labelKey: "custom_field_group_vibe",
      options: [
        { value: "friends", labelKey: "custom_vibe_friends" },
        { value: "family", labelKey: "custom_vibe_family" },
        { value: "mixed", labelKey: "custom_vibe_mixed" }
      ],
      defaultValue: "friends"
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "5000-8000"
    },
    {
      id: "priority",
      type: "select",
      labelKey: "custom_field_priority",
      options: priorityOptions,
      defaultValue: "balanced"
    }
  ],
  bodas: [
    {
      id: "people",
      type: "number",
      labelKey: "custom_field_guests",
      defaultValue: "60",
      required: true
    },
    {
      id: "decor",
      type: "select",
      labelKey: "custom_field_decor",
      options: decorOptions,
      defaultValue: "full"
    },
    {
      id: "decor_detail",
      type: "text",
      labelKey: "custom_field_decor_detail",
      placeholderKey: "custom_ph_decor",
      fullWidth: true
    },
    {
      id: "budget_total",
      type: "select",
      labelKey: "custom_field_wedding_budget_total",
      options: weddingBudgetTotalOptions,
      hintKey: "custom_wedding_budget_total_hint",
      defaultValue: "500k-800k"
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "8000-12000"
    },
    {
      id: "ceremony",
      type: "select",
      labelKey: "custom_field_ceremony",
      options: [
        { value: "symbolic", labelKey: "custom_ceremony_symbolic" },
        { value: "civil", labelKey: "custom_ceremony_civil" },
        { value: "religious", labelKey: "custom_ceremony_religious" },
        { value: "unsure", labelKey: "custom_ceremony_unsure" }
      ],
      defaultValue: "symbolic"
    },
    {
      id: "extra",
      type: "textarea",
      labelKey: "custom_field_extra",
      placeholderKey: "custom_ph_wedding_extra",
      fullWidth: true
    },
    {
      id: "confidentiality_ack",
      type: "checkbox",
      labelKey: "custom_confidentiality_ack",
      noticeKey: "custom_confidentiality_notice",
      required: true,
      fullWidth: true
    }
  ],
  universitarios: [
    {
      id: "people",
      type: "number",
      labelKey: "custom_field_people",
      defaultValue: "40",
      required: true,
      min: 5
    },
    {
      id: "subcategory",
      type: "select",
      labelKey: "custom_field_subcategory",
      options: [
        { value: "medicina", labelKey: "custom_sub_univ_medicina" },
        { value: "odontologia", labelKey: "custom_sub_univ_odontologia" },
        { value: "negocios", labelKey: "custom_sub_univ_negocios" },
        { value: "arquitectura", labelKey: "custom_sub_univ_arquitectura" },
        { value: "ingenieria", labelKey: "custom_sub_univ_ingenieria" },
        { value: "derecho", labelKey: "custom_sub_univ_derecho" },
        { value: "intercambios", labelKey: "custom_sub_univ_intercambios" },
        { value: "convenciones", labelKey: "custom_sub_univ_convenciones" }
      ],
      defaultValue: "negocios"
    },
    {
      id: "institution",
      type: "text",
      labelKey: "custom_field_institution",
      placeholderKey: "custom_ph_institution",
      fullWidth: true
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "5000-8000"
    },
    {
      id: "priority",
      type: "select",
      labelKey: "custom_field_priority",
      options: priorityOptions,
      defaultValue: "hotels"
    },
    {
      id: "extra",
      type: "textarea",
      labelKey: "custom_field_univ_needs",
      placeholderKey: "custom_ph_univ_needs",
      fullWidth: true
    }
  ],
  "escolares-culturales": [
    {
      id: "students",
      type: "number",
      labelKey: "custom_field_students",
      defaultValue: "30",
      required: true
    },
    {
      id: "chaperones",
      type: "number",
      labelKey: "custom_field_chaperones",
      defaultValue: "3"
    },
    {
      id: "grade",
      type: "text",
      labelKey: "custom_field_grade",
      placeholderKey: "custom_ph_grade"
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "5000-8000"
    },
    {
      id: "subcategory",
      type: "select",
      labelKey: "custom_field_subcategory",
      options: [
        { value: "secundarias", labelKey: "custom_sub_school_secundarias" },
        { value: "preparatorias", labelKey: "custom_sub_school_preparatorias" },
        { value: "culturales", labelKey: "custom_sub_school_culturales" },
        { value: "museos", labelKey: "custom_sub_school_museos" },
        { value: "historia", labelKey: "custom_sub_school_historia" },
        { value: "campamentos", labelKey: "custom_sub_school_campamentos" },
        { value: "educativas", labelKey: "custom_sub_school_educativas" }
      ],
      defaultValue: "culturales"
    },
    {
      id: "focus",
      type: "select",
      labelKey: "custom_field_school_focus",
      options: [
        { value: "nature", labelKey: "custom_school_nature" },
        { value: "culture", labelKey: "custom_school_culture" },
        { value: "adventure", labelKey: "custom_school_adventure" },
        { value: "mix", labelKey: "custom_priority_mix" }
      ],
      defaultValue: "culture"
    },
    {
      id: "extra",
      type: "textarea",
      labelKey: "custom_field_school_needs",
      placeholderKey: "custom_ph_school_needs",
      fullWidth: true
    }
  ],
  individuales: [
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_day",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "5000-8000"
    },
    {
      id: "rhythm",
      type: "select",
      labelKey: "custom_field_rhythm",
      options: [
        { value: "intense", labelKey: "custom_rhythm_intense" },
        { value: "relaxed", labelKey: "custom_rhythm_relaxed" },
        { value: "mix", labelKey: "custom_priority_mix" }
      ],
      defaultValue: "mix"
    },
    {
      id: "interests",
      type: "textarea",
      labelKey: "custom_field_interests",
      placeholderKey: "custom_ph_interests",
      fullWidth: true
    }
  ],
  "luna-miel": [
    {
      id: "people",
      type: "number",
      labelKey: "custom_field_people",
      defaultValue: "2",
      required: true
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "8000-12000"
    },
    {
      id: "mood",
      type: "select",
      labelKey: "custom_field_honeymoon_mood",
      options: [
        { value: "romantic", labelKey: "custom_mood_romantic" },
        { value: "adventure", labelKey: "custom_priority_adventure" },
        { value: "luxury", labelKey: "custom_mood_luxury" },
        { value: "mix", labelKey: "custom_priority_mix" }
      ],
      defaultValue: "romantic"
    },
    {
      id: "surprises",
      type: "select",
      labelKey: "custom_field_surprises",
      options: [
        { value: "yes", labelKey: "custom_surprises_yes" },
        { value: "some", labelKey: "custom_surprises_some" },
        { value: "no", labelKey: "custom_surprises_no" }
      ],
      defaultValue: "some"
    }
  ],
  corporativos: [
    {
      id: "people",
      type: "number",
      labelKey: "custom_field_people",
      defaultValue: "15",
      required: true
    },
    {
      id: "company",
      type: "text",
      labelKey: "custom_field_company",
      placeholderKey: "custom_ph_company",
      fullWidth: true
    },
    {
      id: "subcategory",
      type: "select",
      labelKey: "custom_field_subcategory",
      options: [
        { value: "incentivos", labelKey: "custom_sub_corp_incentivos" },
        { value: "team-building", labelKey: "custom_sub_corp_team" },
        { value: "convenciones", labelKey: "custom_sub_corp_convenciones" },
        { value: "congresos", labelKey: "custom_sub_corp_congresos" },
        { value: "networking", labelKey: "custom_sub_corp_networking" },
        { value: "ejecutivas", labelKey: "custom_sub_corp_ejecutivas" }
      ],
      defaultValue: "incentivos"
    },
    {
      id: "event_type",
      type: "select",
      labelKey: "custom_field_event_type",
      options: [
        { value: "incentive", labelKey: "custom_event_incentive" },
        { value: "convention", labelKey: "custom_event_convention" },
        { value: "team", labelKey: "custom_event_team" },
        { value: "other", labelKey: "custom_event_other" }
      ],
      defaultValue: "incentive"
    },
    {
      id: "budget_pp",
      type: "select",
      labelKey: "custom_field_budget_pp",
      options: budgetOptions,
      hintKey: budgetHintKey,
      defaultValue: "5000-8000"
    },
    {
      id: "branding",
      type: "select",
      labelKey: "custom_field_branding",
      options: [
        { value: "yes", labelKey: "custom_branding_yes" },
        { value: "no", labelKey: "custom_branding_no" },
        { value: "ask", labelKey: "custom_branding_ask" }
      ],
      defaultValue: "ask"
    },
    {
      id: "extra",
      type: "textarea",
      labelKey: "custom_field_corp_goals",
      placeholderKey: "custom_ph_corp_goals",
      fullWidth: true
    }
  ]
};
