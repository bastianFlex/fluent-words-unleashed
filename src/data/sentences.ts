
import { LanguageData, Sentence } from "@/types/typing";

export const sentences: LanguageData = {
  "pt": [
    {
      text: "A prática leva à perfeição.",
      difficulty: "easy",
      translation: {
        en: "Practice makes perfect.",
        fr: "C'est en forgeant qu'on devient forgeron.",
        es: "La práctica hace al maestro."
      },
      mapping: [
        {
          original: "A prática",
          translated_en: "Practice",
          translated_fr: "C'est en forgeant",
          translated_es: "La práctica"
        },
        {
          original: "leva à",
          translated_en: "makes",
          translated_fr: "qu'on devient",
          translated_es: "hace"
        },
        {
          original: "perfeição",
          translated_en: "perfect",
          translated_fr: "forgeron",
          translated_es: "al maestro"
        }
      ]
    },
    {
      text: "Quem não arrisca, não petisca.",
      difficulty: "easy",
      translation: {
        en: "Nothing ventured, nothing gained.",
        fr: "Qui ne tente rien n'a rien.",
        es: "Quien no se arriesga, no gana."
      },
      mapping: [
        {
          original: "Quem não arrisca",
          translated_en: "Nothing ventured",
          translated_fr: "Qui ne tente rien",
          translated_es: "Quien no se arriesga"
        },
        {
          original: "não petisca",
          translated_en: "nothing gained",
          translated_fr: "n'a rien",
          translated_es: "no gana"
        }
      ]
    }
  ],
  "en": [
    {
      text: "The paradox of our time is that we have taller buildings but shorter tempers.",
      difficulty: "hard",
      translation: {
        pt: "O paradoxo do nosso tempo é que temos edifícios mais altos mas temperamentos mais curtos.",
        fr: "Le paradoxe de notre époque est que nous avons des bâtiments plus hauts mais des tempéraments plus courts.",
        es: "La paradoja de nuestro tiempo es que tenemos edificios más altos pero temperamentos más cortos."
      },
      mapping: [
        {
          original: "The paradox",
          translated_pt: "O paradoxo"
        },
        {
          original: "of our time",
          translated_pt: "do nosso tempo"
        },
        {
          original: "is that we have",
          translated_pt: "é que temos"
        },
        {
          original: "taller buildings",
          translated_pt: "edifícios mais altos"
        },
        {
          original: "but shorter tempers",
          translated_pt: "mas temperamentos mais curtos"
        }
      ]
    },
    {
      text: "Time flies like an arrow; fruit flies like a banana.",
      difficulty: "hard",
      translation: {
        pt: "O tempo voa como uma flecha; moscas da fruta gostam de banana.",
        fr: "Le temps passe comme une flèche; les mouches à fruits aiment les bananes.",
        es: "El tiempo vuela como una flecha; las moscas de la fruta prefieren el plátano."
      },
      mapping: [
        {
          original: "Time flies",
          translated_pt: "O tempo voa"
        },
        {
          original: "like an arrow",
          translated_pt: "como uma flecha"
        },
        {
          original: "fruit flies",
          translated_pt: "moscas da fruta"
        },
        {
          original: "like a banana",
          translated_pt: "gostam de banana"
        }
      ]
    }
  ],
  "fr": [
    {
      text: "Petit à petit, l'oiseau fait son nid.",
      difficulty: "easy",
      translation: {
        pt: "Pouco a pouco, o pássaro faz seu ninho.",
        en: "Little by little, the bird builds its nest.",
        es: "Poco a poco, el pájaro hace su nido."
      },
      mapping: [
        {
          original: "Petit à petit",
          translated_pt: "Pouco a pouco"
        },
        {
          original: "l'oiseau",
          translated_pt: "o pássaro"
        },
        {
          original: "fait son nid",
          translated_pt: "faz seu ninho"
        }
      ]
    },
    {
      text: "Les voyages forment la jeunesse.",
      difficulty: "easy",
      translation: {
        pt: "As viagens formam a juventude.",
        en: "Travel broadens the mind of youth.",
        es: "Los viajes forman a la juventud."
      },
      mapping: [
        {
          original: "Les voyages",
          translated_pt: "As viagens"
        },
        {
          original: "forment",
          translated_pt: "formam"
        },
        {
          original: "la jeunesse",
          translated_pt: "a juventude"
        }
      ]
    }
  ],
  "es": [
    {
      text: "Más vale tarde que nunca.",
      difficulty: "easy",
      translation: {
        pt: "Mais vale tarde do que nunca.",
        en: "Better late than never.",
        fr: "Mieux vaut tard que jamais."
      },
      mapping: [
        {
          original: "Más vale",
          translated_pt: "Mais vale"
        },
        {
          original: "tarde",
          translated_pt: "tarde"
        },
        {
          original: "que nunca",
          translated_pt: "do que nunca"
        }
      ]
    },
    {
      text: "El hábito no hace al monje.",
      difficulty: "easy",
      translation: {
        pt: "O hábito não faz o monge.",
        en: "The habit doesn't make the monk.",
        fr: "L'habit ne fait pas le moine."
      },
      mapping: [
        {
          original: "El hábito",
          translated_pt: "O hábito"
        },
        {
          original: "no hace",
          translated_pt: "não faz"
        },
        {
          original: "al monje",
          translated_pt: "o monge"
        }
      ]
    }
  ]
};

// Function to get sentences based on language and difficulty
export const getSentences = (
  language: string, 
  difficulty?: string
): Sentence[] => {
  const selectedLanguage = language.split('-')[0] || language;
  
  if (!sentences[selectedLanguage]) {
    return [];
  }
  
  const availableSentences = sentences[selectedLanguage];
  
  if (difficulty) {
    return availableSentences.filter(
      sentence => sentence.difficulty === difficulty
    );
  }
  
  return availableSentences;
};
