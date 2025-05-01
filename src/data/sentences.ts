
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
    },
    {
      text: "A necessidade é a mãe da invenção e o pai do crime.",
      difficulty: "hard",
      translation: {
        en: "Necessity is the mother of invention and the father of crime.",
        fr: "La nécessité est mère de l'invention et père du crime.",
        es: "La necesidad es la madre de la invención y el padre del crimen."
      },
      mapping: [
        {
          original: "A necessidade",
          translated_en: "Necessity",
          translated_fr: "La nécessité",
          translated_es: "La necesidad"
        },
        {
          original: "é a mãe",
          translated_en: "is the mother",
          translated_fr: "est mère",
          translated_es: "es la madre"
        },
        {
          original: "da invenção",
          translated_en: "of invention",
          translated_fr: "de l'invention",
          translated_es: "de la invención"
        },
        {
          original: "e o pai",
          translated_en: "and the father",
          translated_fr: "et père",
          translated_es: "y el padre"
        },
        {
          original: "do crime",
          translated_en: "of crime",
          translated_fr: "du crime",
          translated_es: "del crimen"
        }
      ]
    },
    {
      text: "O sábio conhece suas fraquezas, e o tolo ignora suas forças.",
      difficulty: "very_hard",
      translation: {
        en: "The wise person knows their weaknesses, and the fool ignores their strengths.",
        fr: "Le sage connaît ses faiblesses, et le fou ignore ses forces.",
        es: "El sabio conoce sus debilidades, y el tonto ignora sus fortalezas."
      },
      mapping: [
        {
          original: "O sábio",
          translated_en: "The wise person",
          translated_fr: "Le sage",
          translated_es: "El sabio"
        },
        {
          original: "conhece",
          translated_en: "knows",
          translated_fr: "connaît",
          translated_es: "conoce"
        },
        {
          original: "suas fraquezas",
          translated_en: "their weaknesses",
          translated_fr: "ses faiblesses",
          translated_es: "sus debilidades"
        },
        {
          original: "e o tolo",
          translated_en: "and the fool",
          translated_fr: "et le fou",
          translated_es: "y el tonto"
        },
        {
          original: "ignora",
          translated_en: "ignores",
          translated_fr: "ignore",
          translated_es: "ignora"
        },
        {
          original: "suas forças",
          translated_en: "their strengths",
          translated_fr: "ses forces",
          translated_es: "sus fortalezas"
        }
      ]
    },
    {
      text: "Não é com vinagre que se apanham moscas; não é com violência que se conquista o coração.",
      difficulty: "expert",
      translation: {
        en: "You don't catch flies with vinegar; you don't win hearts with violence.",
        fr: "On n'attrape pas les mouches avec du vinaigre; on ne gagne pas les cœurs avec violence.",
        es: "No se atrapan moscas con vinagre; no se conquistan corazones con violencia."
      },
      mapping: [
        {
          original: "Não é com vinagre",
          translated_en: "You don't catch flies with vinegar",
          translated_fr: "On n'attrape pas les mouches avec du vinaigre",
          translated_es: "No se atrapan moscas con vinagre"
        },
        {
          original: "que se apanham moscas",
          translated_en: "you don't catch flies",
          translated_fr: "on n'attrape pas les mouches",
          translated_es: "no se atrapan moscas"
        },
        {
          original: "não é com violência",
          translated_en: "you don't win hearts with violence",
          translated_fr: "on ne gagne pas les cœurs avec violence",
          translated_es: "no se conquistan corazones con violencia"
        },
        {
          original: "que se conquista o coração",
          translated_en: "you don't win hearts",
          translated_fr: "on ne gagne pas les cœurs",
          translated_es: "no se conquistan corazones"
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
    },
    {
      text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      difficulty: "very_hard",
      translation: {
        pt: "Nós somos o que repetidamente fazemos. Excelência, então, não é um ato, mas um hábito.",
        fr: "Nous sommes ce que nous faisons régulièrement. L'excellence n'est donc pas un acte mais une habitude.",
        es: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto sino un hábito."
      },
      mapping: [
        {
          original: "We are",
          translated_pt: "Nós somos"
        },
        {
          original: "what we repeatedly do",
          translated_pt: "o que repetidamente fazemos"
        },
        {
          original: "Excellence, then,",
          translated_pt: "Excelência, então,"
        },
        {
          original: "is not an act",
          translated_pt: "não é um ato"
        },
        {
          original: "but a habit",
          translated_pt: "mas um hábito"
        }
      ]
    },
    {
      text: "The limits of my language mean the limits of my world; the boundaries of my expression define the horizons of my perception.",
      difficulty: "expert",
      translation: {
        pt: "Os limites da minha linguagem significam os limites do meu mundo; as fronteiras da minha expressão definem os horizontes da minha percepção.",
        fr: "Les limites de mon langage sont les limites de mon monde; les frontières de mon expression définissent les horizons de ma perception.",
        es: "Los límites de mi lenguaje significan los límites de mi mundo; las fronteras de mi expresión definen los horizontes de mi percepción."
      },
      mapping: [
        {
          original: "The limits of my language",
          translated_pt: "Os limites da minha linguagem"
        },
        {
          original: "mean the limits of my world",
          translated_pt: "significam os limites do meu mundo"
        },
        {
          original: "the boundaries of my expression",
          translated_pt: "as fronteiras da minha expressão"
        },
        {
          original: "define the horizons",
          translated_pt: "definem os horizontes"
        },
        {
          original: "of my perception",
          translated_pt: "da minha percepção"
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
    },
    {
      text: "L'habit ne fait pas le moine, mais il contribue à le faire connaître.",
      difficulty: "hard",
      translation: {
        pt: "O hábito não faz o monge, mas contribui para torná-lo conhecido.",
        en: "The habit doesn't make the monk, but it helps make him known.",
        es: "El hábito no hace al monje, pero contribuye a darlo a conocer."
      },
      mapping: [
        {
          original: "L'habit",
          translated_pt: "O hábito"
        },
        {
          original: "ne fait pas le moine",
          translated_pt: "não faz o monge"
        },
        {
          original: "mais il contribue",
          translated_pt: "mas contribui"
        },
        {
          original: "à le faire connaître",
          translated_pt: "para torná-lo conhecido"
        }
      ]
    },
    {
      text: "La critique est facile, mais l'art est difficile; chacun peut juger mais peu peuvent créer.",
      difficulty: "very_hard",
      translation: {
        pt: "A crítica é fácil, mas a arte é difícil; qualquer um pode julgar, mas poucos podem criar.",
        en: "Criticism is easy, but art is difficult; anyone can judge but few can create.",
        es: "La crítica es fácil, pero el arte es difícil; cualquiera puede juzgar pero pocos pueden crear."
      },
      mapping: [
        {
          original: "La critique est facile",
          translated_pt: "A crítica é fácil"
        },
        {
          original: "mais l'art est difficile",
          translated_pt: "mas a arte é difícil"
        },
        {
          original: "chacun peut juger",
          translated_pt: "qualquer um pode julgar"
        },
        {
          original: "mais peu peuvent créer",
          translated_pt: "mas poucos podem criar"
        }
      ]
    },
    {
      text: "Le doute est le commencement de la sagesse; celui qui ne doute de rien n'affirme rien avec certitude.",
      difficulty: "expert",
      translation: {
        pt: "A dúvida é o começo da sabedoria; aquele que não duvida de nada, nada afirma com certeza.",
        en: "Doubt is the beginning of wisdom; he who doubts nothing affirms nothing with certainty.",
        es: "La duda es el comienzo de la sabiduría; quien no duda de nada, nada afirma con certeza."
      },
      mapping: [
        {
          original: "Le doute",
          translated_pt: "A dúvida"
        },
        {
          original: "est le commencement",
          translated_pt: "é o começo"
        },
        {
          original: "de la sagesse",
          translated_pt: "da sabedoria"
        },
        {
          original: "celui qui ne doute de rien",
          translated_pt: "aquele que não duvida de nada"
        },
        {
          original: "n'affirme rien avec certitude",
          translated_pt: "nada afirma com certeza"
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
    },
    {
      text: "Quien a buen árbol se arrima, buena sombra le cobija.",
      difficulty: "hard",
      translation: {
        pt: "Quem se encosta a uma boa árvore, boa sombra o cobre.",
        en: "He who leans against a good tree is sheltered by good shade.",
        fr: "Qui s'appuie sur un bon arbre est abrité par une bonne ombre."
      },
      mapping: [
        {
          original: "Quien a buen árbol",
          translated_pt: "Quem se encosta a uma boa árvore"
        },
        {
          original: "se arrima",
          translated_pt: "se encosta"
        },
        {
          original: "buena sombra",
          translated_pt: "boa sombra"
        },
        {
          original: "le cobija",
          translated_pt: "o cobre"
        }
      ]
    },
    {
      text: "No por mucho madrugar amanece más temprano; la paciencia es virtud de sabios.",
      difficulty: "very_hard",
      translation: {
        pt: "Não é por acordar muito cedo que amanhece mais cedo; a paciência é virtude dos sábios.",
        en: "Getting up early doesn't make the sun rise sooner; patience is a virtue of the wise.",
        fr: "Ce n'est pas en se levant tôt que l'aube arrive plus vite; la patience est une vertu des sages."
      },
      mapping: [
        {
          original: "No por mucho madrugar",
          translated_pt: "Não é por acordar muito cedo"
        },
        {
          original: "amanece más temprano",
          translated_pt: "que amanhece mais cedo"
        },
        {
          original: "la paciencia",
          translated_pt: "a paciência"
        },
        {
          original: "es virtud de sabios",
          translated_pt: "é virtude dos sábios"
        }
      ]
    },
    {
      text: "La ignorancia afirma o niega rotundamente; la ciencia duda con frecuencia y suspende el juicio hasta obtener pruebas irrefutables.",
      difficulty: "expert",
      translation: {
        pt: "A ignorância afirma ou nega categoricamente; a ciência frequentemente duvida e suspende o julgamento até obter provas irrefutáveis.",
        en: "Ignorance affirms or denies categorically; science often doubts and suspends judgment until obtaining irrefutable evidence.",
        fr: "L'ignorance affirme ou nie catégoriquement; la science doute souvent et suspend son jugement jusqu'à l'obtention de preuves irréfutables."
      },
      mapping: [
        {
          original: "La ignorancia",
          translated_pt: "A ignorância"
        },
        {
          original: "afirma o niega rotundamente",
          translated_pt: "afirma ou nega categoricamente"
        },
        {
          original: "la ciencia",
          translated_pt: "a ciência"
        },
        {
          original: "duda con frecuencia",
          translated_pt: "frequentemente duvida"
        },
        {
          original: "y suspende el juicio",
          translated_pt: "e suspende o julgamento"
        },
        {
          original: "hasta obtener pruebas irrefutables",
          translated_pt: "até obter provas irrefutáveis"
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
