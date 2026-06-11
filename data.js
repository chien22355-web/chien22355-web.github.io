window.SITE_DATA = {
  news: [
    {
      title: "Resilient Energy-Based Control for DC Data Centers under Grid and Load Disturbances",
      date: "2026-05-20",
      region: "United States",
      sector: "Data Center & Converter Control",
      source: "arXiv",
      sourceUrl: "https://arxiv.org/html/2605.21691v1",
      priority: true,
      tags: ["DC data center", "passivity-based control", "Port-Hamiltonian", "constant-power load", "AC/DC converter"],
      summary: "Wang, Feng, Chou and Lin present a Port-Hamiltonian passivity-based control framework for AC/DC converters supplying non-passive IT rack loads in DC data centers under grid and load disturbances."
    },
    {
      title: "Delta debuts prefabricated AI modular data center solution at COMPUTEX 2026",
      date: "2026-06-02",
      region: "Taiwan",
      sector: "Data Center & AI Infrastructure",
      source: "Taiwan News / PR Newswire",
      sourceUrl: "https://www.taiwannews.com.tw/news/6375220",
      priority: true,
      tags: ["Delta", "AI data center", "800VDC", "liquid cooling", "microgrid", "digital twin"],
      summary: "Delta introduced a prefabricated AI modular data center solution at COMPUTEX 2026, combining 800VDC in-row power, megawatt-scale liquid cooling, battery backup, microgrid integration, and digital twin capability."
    },
    {
      title: "Ardian and Verne announce digital infrastructure hub in Ile-de-France to support European industrial capabilities",
      date: "2026-06-01",
      region: "France",
      sector: "Data Center & Digital Infrastructure",
      source: "Ardian",
      sourceUrl: "https://www.ardian.com/news-insights/press-releases/ardian-and-verne-announce-digital-infrastructure-hub-ile-de-france",
      priority: true,
      tags: ["data center", "AI gigafactory", "500 MW", "low-carbon electricity", "grid connection"],
      summary: "Ardian and Verne announced an Ile-de-France digital infrastructure campus targeting 500 MW of capacity, with an initial 200+ MW phase by 2030 and linked low-carbon power planning."
    },
    {
      title: "Securing Open Data in Energy: Triage in Data Best Practice Guidance",
      date: "2026-06-01",
      region: "United Kingdom",
      sector: "Open Data & Cyber Risk",
      source: "Ofgem",
      sourceUrl: "https://www.ofgem.gov.uk/consultation/securing-open-data-energy-triage-data-best-practice-guidance",
      priority: false,
      tags: ["open energy data", "cybersecurity", "triage model", "system resilience"],
      summary: "Ofgem consultation on how energy-sector open data should be triaged to balance innovation, cybersecurity, and power-system resilience."
    },
    {
      title: "Adani Green Energy commissions the world's largest single-location battery energy storage system of 3.37 GWh",
      date: "2026-05-30",
      region: "India",
      sector: "Storage & Flexibility",
      source: "Adani Green Energy",
      sourceUrl: "https://www.adanigreenenergy.com/newsroom/media-releases/adani-green-energy-commissions-the-worlds-largest-single-location-battery-energy-storage",
      priority: false,
      tags: ["BESS", "Khavda", "renewable energy hub", "grid flexibility"],
      summary: "Adani Green Energy announced the commissioning of a 3.37 GWh battery energy storage system at the Khavda renewable energy hub, strengthening reliable clean-power access."
    }
  ],
  articles: [
    {
      articleNo: 5,
      title: "Passivity-Based Control for DC Data Centres: Enhancing Converter Stability under Grid and Load Disturbances",
      date: "2026-06-11",
      topic: "Data Center Power Integration",
      readTime: "9 min",
      imageTone: "control",
      sourceTitle: "Wang, Feng, Chou and Lin, arXiv:2605.21691",
      sourceUrl: "https://arxiv.org/html/2605.21691v1",
      tags: ["DC data centres", "passivity-based control", "Port-Hamiltonian", "constant-power loads", "converter stability"],
      slug: "passivity-based-control-dc-data-centres",
      excerpt: "A technical review of how Port-Hamiltonian passivity-based control can improve DC bus stability and ride-through for converter-fed DC data centres with non-passive constant-power IT loads.",
      sections: [
        { heading: "Executive Summary", paragraphs: [
          "The transition towards high-density AI data centres is increasing interest in DC power architectures. However, these systems introduce new converter-level stability challenges. Aggregated IT rack loads may behave as constant-power loads, creating negative incremental resistance at the DC bus and reducing damping during grid or load disturbances.",
          "This technical note reviews a Port-Hamiltonian passivity-based control approach for grid-tied AC/DC converters supplying DC data centres. The method uses energy shaping and damping injection to regulate the DC bus and render the converter-load interface passive, even when the connected IT loads exhibit non-passive behaviour.",
          "For power systems and data-centre engineers, the key implication is that large data-centre connections should be assessed not only for steady-state capacity, but also for converter control robustness, DC bus ride-through capability and validated dynamic performance. This is particularly important where large converter-interfaced loads are connected to constrained, low-inertia or disturbance-sensitive networks."
        ]},
        { heading: "Technical Framing", points: [
          { label: "DC data centre power architecture", text: "A simplified DC data-centre power architecture can be represented as: AC grid -> grid impedance -> AC/DC converter and filter -> DC bus -> IT rack loads, DC/DC converters and cooling loads. In this architecture, the front-end AC/DC converter is the key interface between the external power system and the internal DC distribution network. Its control response determines how the DC bus behaves during voltage sags, load steps and other disturbances." },
          { label: "Non-passive constant-power load behaviour", text: "Constant-power loads introduce negative incremental resistance into the DC bus. When the DC bus voltage decreases, the load current increases in order to maintain constant power. This behaviour reduces damping, weakens voltage recovery and may destabilise the converter-load interaction during load steps or grid disturbances. Dynamic IT rack demand should therefore be treated as a converter-stability input, not merely as an energy-forecasting variable." },
          { label: "Limitations of conventional PI control", text: "Conventional cascaded PI control may provide acceptable small-signal performance near the rated operating point. However, it does not explicitly enforce energy dissipation under large grid or load disturbances such as voltage sags, frequency deviations, converter current limits, sudden IT load changes or operation away from the nominal design point." },
          { label: "Port-Hamiltonian and passivity-based control", text: "A Port-Hamiltonian formulation provides an energy-based framework for modelling the grid, converter and DC-link subsystems. Energy shaping defines where the system should settle by shaping stored energy so that the desired DC bus voltage becomes the stable equilibrium point. Damping injection defines how the system should stop oscillating on the way to that equilibrium point by adding virtual damping that dissipates excess energy." },
          { label: "Engineering proposal", text: "The proposed engineering concept can be summarised as: grid-tied AC/DC converter + constant-power data-centre load + Port-Hamiltonian passivity-rendering control. This approach aims to improve DC bus voltage ride-through, enhance disturbance robustness and reduce the risk of converter-load instability during grid or IT load disturbances." }
        ]},
        { heading: "Recommendations", paragraphs: [
          "Large DC data-centre connection studies should go beyond steady-state demand assessment. Validated dynamic models should be required for large DC data-centre front-end converters, and constant-power load behaviour should be included in connection studies.",
          "DC bus ride-through should be tested under voltage sag and load step events. Passivity-based or energy-based control should be benchmarked against conventional PI controllers, and data-centre internal resilience should be coordinated with wider grid stability requirements.",
          "The front-end AC/DC converters require validated dynamic models because their control response determines how the DC bus behaves during voltage sags and load steps. Ride-through tests should assess DC voltage deviation, recovery time, converter current limits and the absence of sustained oscillations.",
          "Finally, data-centre internal resilience must be coordinated with wider grid stability requirements, so that protection, backup transfer and reconnection schemes do not create large correlated disturbances for the power system."
        ]},
        { heading: "Economics and Planning Implications", paragraphs: [
          "Passivity-based control should be considered as a risk-reduction technology. Although it may increase design, validation and commissioning effort, it can reduce the expected cost of DC bus instability, ride-through failure, unplanned load shedding and operational disruption.",
          "The economic value of this approach lies in reducing the probability and impact of disturbance-related failures. For large AI data centres, even short-duration instability events may have significant operational and commercial consequences.",
          "DC architectures may reduce conversion losses by simplifying the power conversion chain. However, their economic case depends on whether efficiency gains and resilience benefits outweigh the additional costs associated with advanced control, DC protection, model validation and specialist maintenance.",
          "From a planning perspective, data-centre electrical design should include a converter-level stability plan covering DC bus regulation, constant-power load behaviour, voltage sag response, controller robustness and reconnection strategy. For network operators, large data-centre connections should therefore be assessed as dynamic converter-interfaced loads, rather than simple steady-state MW demand."
        ]}
      ],
      cengAngle: "Use this case to discuss converter control robustness, passivity, constant-power-load dynamics, validated dynamic modelling, DC bus ride-through, and how data-centre internal resilience should coordinate with wider grid stability requirements."
    },
    {
      articleNo: 4,
      title: "Engineering Assessment of Delta's Prefabricated AI Modular Data Centre Solution at COMPUTEX 2026",
      date: "2026-06-07",
      topic: "Data Center Power Integration",
      readTime: "8 min",
      imageTone: "control",
      sourceTitle: "Taiwan News / PR Newswire",
      sourceUrl: "https://www.taiwannews.com.tw/news/6375220",
      tags: ["Delta", "AI data centre", "800VDC", "liquid cooling", "microgrid", "digital twin"],
      slug: "delta-prefabricated-ai-modular-data-centre-computex-2026",
      excerpt: "An engineering review of Delta's move from component-level power supply toward integrated AI data centre infrastructure, combining 800Vdc power, liquid cooling, battery backup, microgrid integration, and digital twin capability.",
      sections: [
        { heading: "Executive Summary", paragraphs: [
          "Delta's COMPUTEX 2026 announcement should be interpreted as a strategic move from component-level power supply towards integrated AI data centre infrastructure. The company introduced a prefabricated AI modular data centre solution combining 800Vdc in-row power architecture, liquid cooling, battery backup, microgrid integration and digital twin capability. The key engineering value proposition is not only faster deployment, but the reduction of electrical, thermal and integration risks in high-density AI facilities.",
          "From a commercial perspective, the solution positions Delta in a higher-value segment of the AI infrastructure supply chain. Instead of competing only on power supply unit cost, Delta is moving towards system-level margin through integrated power, cooling and resilience solutions. This transition is consistent with its recent financial performance, where first-quarter 2026 gross margin reached 37% and infrastructure segment profit increased strongly year-on-year."
        ]},
        { heading: "Technical Framing", points: [
          { label: "800VDC", text: "The most important innovation is the combination of 800Vdc in-row power and megawatt-scale liquid cooling. At higher rack power densities, low-voltage distribution becomes increasingly constrained by current, conductor size and thermal losses. Moving to 800Vdc reduces current for a given power level, which can reduce distribution losses and improve power density." },
          { label: "Thermal integration", text: "Delta's liquid cooling portfolio includes megawatt-scale coolant distribution and chip-level cooling solutions. This is important because future AI racks will be limited not only by power availability, but also by the ability to remove heat reliably at source." }
        ]},
        { heading: "Competitive Moat", points: [
          { label: "System integration", text: "Delta combines power electronics, thermal management, infrastructure engineering, digital controls and global manufacturing capability. This breadth creates a barrier to entry because customers need validated system performance, not isolated components." },
          { label: "Ecosystem alignment", text: "Delta's products are being developed around next-generation AI rack requirements, including NVIDIA-related architectures. This matters because AI infrastructure purchasing is increasingly shaped by reference designs, qualification cycles and platform compatibility." },
          { label: "Manufacturing repeatability", text: "Prefabricated data centres require strong design control, supply-chain coordination and factory testing. These capabilities favour companies that already operate at scale across power electronics and infrastructure manufacturing." }
        ]},
        { heading: "Economics and Plans", points: [
          { label: "Infrastructure integration", text: "Delta is positioning itself as an AI data centre infrastructure integrator. This is distinct from being only a PSU vendor or cooling equipment supplier." },
          { label: "Grid-to-Chip strategy", text: "Delta's Grid-to-Chip architecture is strategically well aligned with the direction of the market. The next stage of competition will depend on deployment speed, power density, cooling efficiency, grid resilience and energy cost." }
        ]},
        { heading: "Recommendations", points: [
          { label: "Engineering risk review", text: "The main engineering risks are DC protection, converter interaction, thermal reliability and operational integration. 800Vdc systems require careful protection design because DC faults do not naturally clear at current zero-crossing." },
          { label: "Evidence requirements", text: "Customers and grid operators will increasingly require evidence on PUE reduction, transient response, fault behavior, maintainability and grid-interactive capability." }
        ]}
      ],
      cengAngle: "Use this case to discuss DC protection, converter interaction, thermal integration, factory-tested modularisation, grid-interactive capability, PUE evidence, and system-level engineering judgement for high-density AI facilities."
    },
    {
      articleNo: 3,
      title: "Ardian and Verne Announce Digital Infrastructure Hub in Ile-de-France to Support European Industrial Capabilities at Choose France",
      date: "2026-06-02",
      topic: "Data Center Power Integration",
      readTime: "9 min",
      imageTone: "control",
      sourceTitle: "Ardian press release",
      sourceUrl: "https://www.ardian.com/news-insights/press-releases/ardian-and-verne-announce-digital-infrastructure-hub-ile-de-france",
      tags: ["data center", "AI infrastructure", "500 MW connection", "low-carbon electricity", "grid reinforcement", "flexible demand"],
      slug: "ardian-verne-ile-de-france-digital-infrastructure-hub",
      excerpt: "A review of how a proposed 500 MW AI and data-centre campus should be treated as a strategic electricity-system load, with grid-impact, low-carbon supply, and flexibility considerations.",
      sections: [
        { heading: "Background and Summary", paragraphs: [
          "Ardian and Verne announced a major digital infrastructure hub in Ile-de-France, including a proposed AI gigafactory and data centre campus with a planned connection capacity of up to 500 MW. The initial phase is expected to reach approximately 200+ MW by 2030, with the overall digital infrastructure investment estimated at up to EUR 5 billion.",
          "In parallel, Ardian plans to invest up to EUR 3 billion in renewable energy projects, representing approximately 2.5 GW of renewable capacity by 2030. This indicates that large-scale AI infrastructure is increasingly being developed alongside dedicated low-carbon electricity procurement strategies."
        ]},
        { heading: "Discussion", paragraphs: [
          "The proposed AI campus represents a high-density and potentially low-flexibility electrical demand that may materially affect transmission capacity, connection queues, local reinforcement requirements, and low-carbon procurement strategies.",
          "From a power system perspective, the key issue is not only annual electricity consumption, but also the size, location, timing, and firmness of demand. A 500 MW data centre connection should therefore be assessed as a strategic industrial load rather than a conventional commercial electricity customer."
        ]},
        { heading: "Technical Framing: Data Centre Load Modelling", body: "The proposed 500 MW connection capacity is equivalent to a strategic industrial load and should be assessed against regional transmission headroom, firm capacity availability, reinforcement lead times, and system carbon intensity.", formulae: ["P_data centre(t) = P_IT(t) + P_cooling(t) + P_aux(t)"], paragraphs: [
          "P_IT(t) represents IT and computing load; P_cooling(t) represents cooling system demand; P_aux(t) represents auxiliary electrical loads.",
          "System identification can be used to learn a mathematical model of the data centre from measured input-output data. Suitable methods may include regression, ARIMA models, Gaussian processes, and neural networks. These methods can help estimate the relationship between ambient temperature, server utilisation, cooling demand, and total electricity consumption."
        ]},
        { heading: "Control Objective", body: "The operational control objective can be framed as minimising the combined impact of electricity cost, carbon emission cost, and load fluctuation.", formulae: ["Minimise: Electricity cost + Carbon emission cost + Load fluctuation"], paragraphs: ["In practical terms, the data centre operator should optimise grid import, battery dispatch, cooling strategy, and workload scheduling while maintaining service reliability."]},
        { heading: "Technical Constraints and Limitations", points: [
          { label: "Connection capacity", text: "Grid import must not exceed the agreed connection capacity." },
          { label: "Critical supply continuity", text: "Critical IT loads must be supplied continuously to maintain compute reliability." },
          { label: "Battery operation", text: "Battery state of charge should be managed to ensure safety, asset lifetime, and emergency backup capability." },
          { label: "Network hosting capacity", text: "Transmission capacity, available headroom, regional network constraints, distribution reinforcement, transformers, high-voltage networks, and fault level studies should be assessed." },
          { label: "Converter-rich load", text: "Voltage stability should be evaluated due to UPS systems, rectifiers, power supplies, and other converter-based equipment." },
          { label: "Peak coincidence", text: "Peak demand coincidence should be assessed to determine whether data centre demand aligns with regional or national system peak periods." }
        ]},
        { heading: "Recommendations", points: [
          { label: "Flexible demand services", text: "AI data centres should be designed to provide flexible demand services without compromising compute reliability. Non-critical computing workloads, battery systems, and cooling flexibility may allow the facility to reduce grid stress during constrained periods." },
          { label: "HVDC and low-carbon power transfer", text: "HVDC links may support the spatial mismatch between low-carbon generation zones and concentrated data centre demand clusters, especially where AI infrastructure grows near major urban or industrial regions." }
        ]},
        { heading: "Economic and Planning Considerations", points: [
          { label: "Grid reinforcement and locational pricing", text: "Data centres should be assessed under cost-reflective grid charging principles. Where a large data centre creates substantial reinforcement requirements, cost allocation and locational pricing should be carefully reviewed." },
          { label: "Renewable procurement and carbon matching", text: "Annual renewable procurement alone does not guarantee low-carbon electricity in every operating hour. Carbon performance should be assessed using time-varying grid carbon intensity." },
          { label: "Cost and carbon control measures", text: "Battery control, cooling pre-load, and workload scheduling can shift flexible demand toward periods with lower electricity prices, lower carbon intensity, or greater network capacity." }
        ]},
        { heading: "Conclusion", paragraphs: [
          "Large AI data centres should be treated as strategic electricity system assets, not passive commercial loads.",
          "A robust assessment should include grid impact, low-carbon supply strategy, and flexibility and control options. Overall, large-scale AI infrastructure should be integrated into power system planning, low-carbon procurement strategy, and future flexibility market design."
        ]}
      ],
      cengAngle: "Use this case to discuss strategic load assessment, grid connection constraints, low-carbon procurement, demand flexibility, converter-rich load behaviour, and how engineering judgement links public digital infrastructure to electricity system planning."
    },
    {
      articleNo: 2,
      title: "Securing Open Data in Energy: Triage in Data Best Practice Guidance",
      date: "2026-06-01",
      topic: "Open Data & Cyber Risk",
      readTime: "8 min",
      imageTone: "control",
      sourceTitle: "Ofgem consultation",
      sourceUrl: "https://www.ofgem.gov.uk/consultation/securing-open-data-energy-triage-data-best-practice-guidance",
      tags: ["open data", "Ofgem", "cyber-physical risk", "triage", "grid resilience"],
      slug: "securing-open-data-energy-triage",
      excerpt: "Ofgem's open energy data guidance reframed as a managed cyber-physical infrastructure interface, with a risk-based triage model for openness, security, and resilience.",
      sections: [
        { heading: "Executive Summary", body: "Ofgem proposes that open energy data should be treated as a managed cyber-physical infrastructure interface, rather than simply as a transparency measure. The key objective is to balance data openness for innovation with appropriate controls for cybersecurity and system resilience." },
        { heading: "Background and Regulatory Context", paragraphs: [
          "Energy data must flow effectively to support engineering decisions, improve system visibility, and reduce the cost of the net-zero transition. However, increasing cybersecurity threats and the wider use of AI tools mean that the Data Best Practice guidance needs to reconsider the assumption that energy system data should be open by default.",
          "Ofgem therefore proposes three data triage models: centralised, hybrid, and educational. These models aim to classify, validate, and control energy data publication according to its cyber-physical risk. The main challenge is to strike a proportionate balance between security, innovation, and sector growth."
        ]},
        { heading: "Technical Risk Framework", body: "The proposed risk model is not an Ofgem-defined formula. It is an analytical framework developed for this report, adapted from conventional information security risk assessment principles.", formulae: ["Risk = Likelihood x Impact x Public Exposure", "Public Exposure = f(Temporal Granularity, Geographical Granularity, Asset Specificity, Cross-linkability)"], paragraphs: ["This framework reflects the idea that a dataset may become more sensitive when it is highly detailed, asset-specific, frequently updated, geographically precise, or capable of being combined with other public data sources."]},
        { heading: "Assessment of Triage Models", points: [
          { label: "Centralised model", text: "A central body is responsible for data validation and risk assessment, which improves consistency and security but may reduce efficiency and limit local network interpretation." },
          { label: "Hybrid model", text: "A central body sets the standards, while companies assess implementation based on their operational context. This provides the strongest balance between consistency, security, and practical flexibility." },
          { label: "Educational model", text: "Data owners assess risk using guidance and training. This approach is lower-cost and can improve capability, but it may lead to inconsistent standards across the sector." }
        ]},
        { heading: "Recommendations", paragraphs: [
          "Open energy data should be treated as a managed infrastructure interface rather than a passive publication exercise. The key engineering challenge is to balance innovation value against cyber-physical exposure.",
          "A hybrid triage model is recommended because it combines central guidance with contextual engineering judgement from network operators. Publication decisions should be evidence-based, auditable, and proportionate to the sensitivity of the dataset."
        ]},
        { heading: "Conclusion", body: "Energy network data should be opened through a risk-based triage process. The objective is not to restrict data unnecessarily, but to ensure that open data supports smart grid innovation, net-zero delivery, and market development without creating avoidable cyber-physical vulnerabilities." }
      ],
      cengAngle: "Use this case to discuss proportionate risk management, evidence-based decisions, data governance, operational context, and the public-interest balance between innovation and system security."
    },
    {
      articleNo: 1,
      title: "Adani Green Energy commissions the world's largest single-location battery energy storage system of 3.37 GWh; strengthens reliable and clean power access",
      date: "2026-05-30",
      topic: "Storage & Flexibility",
      readTime: "7 min",
      imageTone: "storage",
      sourceTitle: "Adani Green Energy media release",
      sourceUrl: "https://www.adanigreenenergy.com/newsroom/media-releases/adani-green-energy-commissions-the-worlds-largest-single-location-battery-energy-storage",
      tags: ["BESS", "Khavda", "curtailment", "frequency stability", "grid flexibility"],
      slug: "adani-green-energy-3-37-gwh-bess-khavda",
      excerpt: "A review of why the 3.37 GWh Khavda BESS matters for curtailment management, evening peak support, frequency stability, dispatch control, and planning value.",
      sections: [
        { heading: "Key Facts", body: "A 3.37 GWh BESS at the Khavda renewable energy hub was commissioned in May 2026, claimed as the largest single-location deployment outside China. The project adds 3.37 GWh of battery energy storage capacity; the associated MW rating depends on the storage duration, inverter rating, and grid-connection configuration." },
        { heading: "Why Storage Matters", points: [
          { label: "Curtailment", text: "Battery storage can absorb surplus renewable generation during high-output periods, subject to state-of-charge limits and network constraints." },
          { label: "Evening peak support", text: "BESS can discharge during peak demand periods, helping shift clean energy from high-generation hours to high-value consumption hours." },
          { label: "Frequency stability", text: "In low-inertia systems, inverter-based BESS can provide fast active-power response to help arrest frequency deviation." }
        ]},
        { heading: "Control and Data Requirements", body: "Effective operation depends on state-of-charge management, forecast-based dispatch, model predictive control, battery degradation-aware operation, telemetry, and grid-code compliance." },
        { heading: "Economic and Planning Value", body: "The planning case should consider avoided curtailment value, capacity value, ancillary service revenue such as frequency response and voltage support, network deferral, lifecycle cost, and degradation." },
        { heading: "Conclusion", body: "Utility-scale battery energy storage systems should be assessed not only by installed energy capacity, but also by operational flexibility and grid-support capability." }
      ],
      cengAngle: "Use this case to explain how storage design choices connect technical reliability, dispatch strategy, commercial value, degradation risk, grid-code obligations, and public benefit."
    }
  ]
};
