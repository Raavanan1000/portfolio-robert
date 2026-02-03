export type Language = "en" | "fr";

export const translations = {
  fr: {
    hero: {
      role: "Étalonneur Numérique",
      location: "Paris, France",
      quote: "Every frame is a canvas. Every color tells a story.",
      scroll: "Découvrez mon travail",
    },
    about: {
      title: "À Propos",
      paintingQuery: "Peindre avec l'Ombre et la Lumière",
      intro:
        "Basé à Paris, je collabore à distance avec des cinéastes en Europe et à l'international. Mon approche de l'étalonnage est enracinée dans l'observation minutieuse, un goût raffiné et un profond respect de l'image, guidée par l'intention plutôt que par les outils seuls.",
      quote:
        "La couleur est le clavier, les yeux sont les harmonies, l'âme est le piano aux multiples cordes.",
      fuel: "Carburant: expresso et sessions d'étalonnage nocturnes.",
    },
    services: {
      whatIDo: "Ce que je fais",
      title: "Services d'Étalonnage",
      intro:
        "Des longs métrages narratifs aux spots de 30 secondes, j'apporte précision technique et vision artistique à chaque projet. Aucun film ne se ressemble, mes étalonnages non plus.",
      items: {
        feature: {
          title: "Longs Métrages",
          desc: "Les sorties en salle méritent une couleur théâtrale. Des drames intimes aux spectacles à gros budget, j'apporte la même attention obsessionnelle à chaque plan.",
        },
        episodic: {
          title: "Séries & Épisodes",
          desc: "La cohérence est reine dans le travail épisodique. Je crée des look books et maintiens la continuité visuelle à travers les épisodes, les saisons et les arcs narratifs.",
        },
        commercials: {
          title: "Publicités & Clips",
          desc: "Délais courts, impact fort. Que ce soit 30 secondes ou 3 minutes, chaque image doit claquer. Je me spécialise dans les looks audacieux et mémorables.",
        },
        documentary: {
          title: "Documentaire",
          desc: "Naturaliste ne veut pas dire ennuyeux. Je sublime la réalité sans la trahir—rendant les images documentaires cinématographiques tout en restant authentiques.",
        },
        hdr: {
          title: "Mastering HDR",
          desc: "Dolby Vision, HDR10+, HLG—Je parle tous les dialectes HDR. Le streaming premium et le cinéma exigent une science des couleurs premium. Je livre les deux.",
        },
        lookdev: {
          title: "Look Dev & LUTs",
          desc: "Besoin d'un look personnalisé pour votre production ? Je crée des LUTs sur mesure et des guides de style visuel que toute votre équipe peut utiliser sur le plateau et en post-prod.",
        },
      },
    },
    work: {
      selectedWorks: "Sélection de travaux",
      title: "Projets Récents",
      dragSlider:
        "Faites glisser le curseur pour voir la transformation. Image brute / Magie étalonnée.",
      moreWork:
        "Envie d'en voir plus ? Portfolio complet disponible sur demande. (Certains projets sont sous NDA, mais promis, ils sont cools.)",
      project1: {
        title: "Court Métrage",
        desc: "Images d'un court métrage sur lequel j'ai travaillé. Le réalisateur voulait un look spécifique, que j'ai pu livrer grâce à l'étalonnage.",
      },
      project2: {
        title: "Court Métrage",
        desc: "Images d'un court métrage sur lequel j'ai travaillé. Le réalisateur voulait un look spécifique, que j'ai pu livrer grâce à l'étalonnage.",
      },
      graded: "Étalonné",
      raw: "Brut / Log",
    },
    philosophy: {
      title: "Ma Philosophie",
      intro:
        "L'étalonnage n'est pas seulement une affaire de curseurs — c'est de la narration visuelle. Voici mes principes, appris après 8 ans de nuits blanches, d'expressos et d'obsession pour chaque image.",
      items: [
        {
          title: "L'histoire d'abord, toujours",
          desc: "Je n'étalonne pas pour frimer — j'étalonne pour servir le récit. Chaque choix de couleur doit amplifier l'émotion et le sens voulus par le réalisateur. La prouesse technique n'est rien si elle ne soutient pas l'histoire.",
        },
        {
          title: "L'émotion est primordiale",
          desc: "Ambre chaud pour l'intimité. Acier froid pour l'isolement. Primaires saturées pour la joie. Tons désaturés pour la mélancolie. La couleur est un langage émotionnel que je maîtrise. Mon rôle est de faire ressentir des choses au public sans qu'il sache pourquoi.",
        },
        {
          title: "La technique avant la créativité",
          desc: "Teints de peau parfaits. Expositions équilibrées. Continuité d'un plan à l'autre. Ce n'est pas optionnel — c'est la base. Ce n'est qu'après avoir maîtrisé la technique que l'on peut enfreindre les règles avec intention.",
        },
        {
          title: "La collaboration est la clé",
          desc: "Le meilleur travail naît du dialogue. J'écoute les chefs op' parler de leur éclairage, les réalisateurs décrire leur vision, les monteurs expliquer leur rythme. Ensuite, je traduis tout cela en couleur. C'est un dialogue, pas un monologue.",
        },
      ],
      quote:
        "Je ne me contente pas de coloriser des films. J'aide les cinéastes à finir leurs phrases.",
    },
    tools: {
      setup: "Configuration Technique",
      title: "Outils & Workflow",
      intro:
        "Un équipement de niveau professionnel et des flux de travail standard garantissent des résultats constants et de haute qualité.",
      footer:
        "Tout le travail est effectué dans un environnement étalonné et géré par la couleur. Je livre dans n'importe quel format requis : DCP, ProRes, DNxHR, ou rushes bruts avec LUTs.",
      categories: {
        software: "Logiciels d'Étalonnage",
        monitors: "Moniteurs de Référence",
        surfaces: "Surfaces de Contrôle",
        workflow: "Flux & Stockage",
      },
    },
    process: {
      title: "Flux de Travail",
      steps: [
        {
          title: "Développement du Look",
          desc: "Collaboration avec le réalisateur et le chef op pour établir le langage visuel et les mood boards avant de commencer l'étalonnage.",
        },
        {
          title: "Étalonnage & Équilibrage",
          desc: "Correction technique suivie d'un étalonnage créatif. Équilibrage des plans, affinement des teints de peau et modelage de la lumière.",
        },
        {
          title: "Livraison Finale",
          desc: "Assurer la cohérence des couleurs sur tous les livrables, des DCP de cinéma aux formats prêts pour le web.",
        },
      ],
    },
    contact: {
      spark: "Créons quelque chose de Cinématique",
      availability:
        "Disponible pour des projets dans le monde entier. Étalonnage à distance ou sessions en personne à Paris.",
      location: "Paris, 11ème arrondissement",
      timezone: "Fuseau horaire CET (UTC+1)",
      cta: "Discutons de votre projet",
      footer: "© 2024 Anton Robert · Coloriste DI · Paris, France",
      quote: "La couleur est ma vie. Le cinéma est mon âme.",
    },
    common: {
      downloadCV: "Télécharger CV",
      contactMe: "Me contacter",
    },
  },
  en: {
    hero: {
      role: "Digital Colorist",
      location: "Paris, France",
      quote: "Every frame is a canvas. Every color tells a story.",
      scroll: "Discover my work",
    },
    about: {
      title: "About",
      paintingQuery: "Painting with Light & Shadow",
      intro:
        "Based in Paris, I collaborate remotely with filmmakers across Europe and internationally. My approach to color grading is rooted in careful observation, refined taste, and a deep respect for the image guided by understanding and intent rather than tools alone.",
      quote:
        "Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings.",
      fuel: "Fueled by espresso and late-night grading sessions",
    },
    services: {
      whatIDo: "What I Do",
      title: "Color Grading Services",
      intro:
        "From narrative features to 30-second spots, I bring technical precision and artistic vision to every project. No two films are alike—neither are my grades.",
      items: {
        feature: {
          title: "Feature Films",
          desc: "Theatrical releases deserve theatrical color. From intimate indie dramas to big-budget spectacles, I bring the same obsessive attention to every frame.",
        },
        episodic: {
          title: "Episodic & Series",
          desc: "Consistency is king in episodic work. I create look books and maintain visual continuity across episodes, seasons, and story arcs.",
        },
        commercials: {
          title: "Commercials & Music Videos",
          desc: "Fast turnarounds, high impact. Whether it's 30 seconds or 3 minutes, every frame needs to pop. I specialize in bold, memorable looks.",
        },
        documentary: {
          title: "Documentary",
          desc: "Naturalistic doesn't mean boring. I enhance reality without betraying it—making doc footage feel cinematic while staying authentic.",
        },
        hdr: {
          title: "HDR Mastering",
          desc: "Dolby Vision, HDR10+, HLG—I speak all the HDR dialects. Premium streaming and theatrical require premium color science. I deliver both.",
        },
        lookdev: {
          title: "Look Development & LUTs",
          desc: "Need a custom look for your production? I create bespoke LUTs and visual style guides that your whole team can use on set and in post.",
        },
      },
    },
    work: {
      selectedWorks: "Selected Works",
      title: "Recent Projects",
      dragSlider:
        "Drag the slider to see the transformation. Raw footage → graded magic.",
      moreWork:
        "Want to see more? Full portfolio available upon request. (Some projects are under NDA, but I promise they're cool.)",
      project1: {
        title: "Short Film",
        desc: "Images from a short film I worked on. The director wanted a specific look and feel, and I was able to deliver that through color grading.",
      },
      project2: {
        title: "Short Film",
        desc: "Images from a short film I worked on. The director wanted a specific look and feel, and I was able to deliver that through color grading.",
      },
      graded: "Graded",
      raw: "Raw / Log",
    },
    philosophy: {
      title: "My Philosophy",
      intro:
        "Color grading isn't just pushing sliders—it's visual storytelling. Here's what I believe, learned from 8 years of late nights, espresso, and obsessing over every frame.",
      items: [
        {
          title: "Story First, Always",
          desc: "I don't grade to show off—I grade to serve the narrative. Every color choice must amplify the emotion and meaning the director intended. Technical wizardry means nothing if it doesn't support the story.",
        },
        {
          title: "Emotion is Everything",
          desc: "Warm amber for intimacy. Cool steel for isolation. Saturated primaries for joy. Desaturated tones for melancholy. Color is an emotional language, and I'm fluent in it. My job is to make audiences feel without them knowing why.",
        },
        {
          title: "Craft Before Creativity",
          desc: "Perfect skin tones. Balanced exposures. Shot-to-shot continuity. These aren't optional—they're the foundation. Only after mastering the technical can you break the rules with intention. (And I love breaking rules with intention.)",
        },
        {
          title: "Collaboration is Key",
          desc: "The best work happens in conversation. I listen to DPs talk about their lighting setups, directors describe their vision, editors explain their rhythm. Then I translate all of that into color. It's a dialogue, not a monologue.",
        },
      ],
      quote:
        "I don't just color grade films. I help filmmakers finish their sentences.",
    },
    tools: {
      setup: "Technical Setup",
      title: "Tools & Workflow",
      intro:
        "Professional-grade equipment and industry-standard workflows ensure consistent, high-quality results.",
      footer:
        "All work is performed in a calibrated, color-managed environment. I deliver in any format required: DCP, ProRes, DNxHR, or raw footage with LUTs.",
      categories: {
        software: "Grading Software",
        monitors: "Reference Monitors",
        surfaces: "Control Surfaces",
        workflow: "Workflow & Storage",
      },
    },
    process: {
      title: "Workflow",
      steps: [
        {
          title: "Look Development",
          desc: "Collaborating with the director and DP to establish the visual language and mood boards before grading begins.",
        },
        {
          title: "Grading & Balancing",
          desc: "Technical correction followed by creative grading. Balancing shots, refining skin tones, and shaping light.",
        },
        {
          title: "Final Delivery",
          desc: "Ensuring color consistency across all deliverables, from cinema DCPs to web-ready formats.",
        },
      ],
    },
    contact: {
      spark: "Let's Create Something Cinématique",
      availability:
        "Available for projects worldwide. Remote grading or in-person sessions in Paris.",
      location: "Paris, 11th Arrondissement",
      timezone: "CET Timezone (UTC+1)",
      cta: "Let's discuss your project",
      footer: "© 2024 Anton Robert · DI Colorist · Paris, France",
      quote: "Color is my life. Cinema is my soul.",
    },
    common: {
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
  },
};
