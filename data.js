window.SITE_DATA = {
  news: [
    {
          "title": "Topology Optimization for DC Circuit Breaker Placement in HVDC Switching Stations",
          "date": "2026-06-12",
          "region": "Europe",
          "sector": "HVDC Protection & Grid Resilience",
          "source": "arXiv",
          "sourceUrl": "https://arxiv.org/pdf/2606.14286",
          "priority": false,
          "tags": [
                "HVDC",
                "DC circuit breaker",
                "DCCB",
                "protection design",
                "MILP",
                "offshore grid"
          ],
          "summary": "Van Deyck, Van Acker, Chaffey and Van Hertem propose a mixed-integer linear optimisation method for placing DC circuit breakers in HVDC switching stations, balancing fault-impact risk reduction against breaker investment cost."
    },
    {
          "title": "Learning-Assisted Day-Ahead Energy Scheduling for Frequency-Secure Inverter-Dominated Grids with Grid-Forming Battery Energy Storage Systems",
          "date": "2026-06-04",
          "region": "Global Research",
          "sector": "Grid-Forming BESS & Frequency Security",
          "source": "arXiv",
          "sourceUrl": "https://arxiv.org/abs/2606.05534",
          "priority": true,
          "tags": [
                "grid-forming BESS",
                "frequency security",
                "day-ahead scheduling",
                "EMT simulation",
                "surrogate model"
          ],
          "summary": "Fan Jiang and Xingpeng Li propose a learning-assisted day-ahead scheduling framework that uses EMT simulation data and a surrogate model to schedule grid-forming BESS while respecting RoCoF, frequency nadir and transient reserve requirements."
    },
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
          "articleNo": 7,
          "title": "Topology Optimization for DC Circuit Breaker Placement in HVDC Switching Stations",
          "date": "2026-06-24",
          "topic": "HVDC Protection & Grid Resilience",
          "readTime": "8 min",
          "imageTone": "control",
          "sourceTitle": "Merijn Van Deyck, Tom Van Acker, Geraint Chaffey and Dirk Van Hertem, arXiv:2606.14286",
          "sourceUrl": "https://arxiv.org/pdf/2606.14286",
          "tags": [
                "HVDC protection",
                "DC circuit breaker",
                "MILP",
                "topology optimisation",
                "fault-impact risk",
                "offshore energy hub"
          ],
          "slug": "topology-optimization-dc-circuit-breaker-placement-hvdc-switching-stations",
          "excerpt": "A review of how MILP-based topology optimisation can guide DC circuit breaker placement in HVDC switching stations by balancing protection cost against high-impact DC fault risk.",
          "sections": [
                {
                      "heading": "Executive Summary",
                      "paragraphs": [
                            "This paper addresses the protection design problem in future multiterminal HVDC grids. When a DC fault occurs, the fault current can rise very rapidly. Unlike AC systems, DC systems do not have a natural current zero-crossing, which makes fault interruption technically challenging. Without an effective HVDC protection scheme, a single DC fault may lead to the disconnection of a large part of the HVDC network and result in a high-impact outage.",
                            "DC circuit breakers, DCCBs, are critical for isolating DC faults, but they are expensive assets. At the same time, DC faults can have severe operational consequences. Conventional protection strategies and standard configurations become increasingly restrictive when HVDC switching stations grow in size and connect multiple converter stations, DC lines and energy hubs.",
                            "To address this challenge, the paper proposes a mixed-integer linear optimisation, MILP, method for DC circuit breaker placement. The method treats DCCB placement as a topology optimisation problem. It considers the failure rates of DC grid components, the impact of DC faults and the relative cost of DCCBs. The objective is to minimise the risk of high-impact DC faults while accounting for the cost of protection investment.",
                            "In simple terms, the paper asks the following engineering question: how can engineers allocate DCCB investment wisely so that, when a DC fault occurs, as much of the HVDC network as possible remains in operation?"
                      ]
                },
                {
                      "heading": "Technical Framing",
                      "paragraphs": [
                            "If there are 20 possible DCCB locations and each location can either have a breaker or not, there are 2^20, or 1,048,576, possible configurations. It is not practical for engineers to evaluate all these configurations manually, which is why an optimisation-based approach is needed.",
                            "MILP, mixed-integer linear programming, is suitable for engineering decisions that include discrete choices. For each candidate DCCB location, the model defines a binary decision variable indicating whether a DCCB is installed. The optimisation model then decides which locations should receive a DCCB and which should not.",
                            "The paper adopts a risk-based protection design philosophy. In simplified form, risk can be expressed as failure rate multiplied by fault impact. This means the model considers not only how likely a component is to fail, but also how severe the consequence would be if it failed."
                      ],
                      "points": [
                            {
                                  "label": "Fault impact",
                                  "text": "The impact of a DC fault can be evaluated using indicators such as disconnected DC lines, disconnected converters, interrupted MW transfer, loss of offshore wind export capacity, disconnected HVDC grid area, and impact on energy hub or interconnector availability."
                            },
                            {
                                  "label": "Objective function",
                                  "text": "The optimisation balances reduced fault impact against additional breaker cost. It determines not only how many DCCBs are needed, but also where they should be placed."
                            },
                            {
                                  "label": "Marginal value",
                                  "text": "An important feature of the method is that it can calculate the marginal risk-reduction benefit of each additional DCCB, helping engineers assess whether an extra breaker is economically justified."
                            },
                            {
                                  "label": "Overall methodology",
                                  "text": "The workflow builds candidate HVDC switching-station topologies, lists candidate DCCB locations and DC fault scenarios, assigns failure rates, calculates fault impact under each DCCB configuration, formulates the MILP problem, solves for the optimal configuration, and uses the result as a design input."
                            }
                      ]
                },
                {
                      "heading": "Technical Results",
                      "paragraphs": [
                            "The case study contains six external AC connections, representing offshore wind farms and external AC systems such as Belgium, Great Britain and Denmark. The paper uses pre-fault power-flow scenarios representing one year of operation, calculated through economic dispatch optimisation.",
                            "In the base case, the optimal solution installs one DCCB. This breaker divides the DC switching station into two protection zones, reducing the impact of DC faults without requiring full selective protection. Of the total objective value, 36.08% comes from DCCB investment cost, while 63.92% comes from the remaining fault-impact risk.",
                            "The paper also notes that the AC node with the highest imbalance cost is connected to the DC node with the lowest total fault probability. This shows that the optimal design is not determined only by failure probability, but also by the operational consequence of each fault.",
                            "Sensitivity analysis shows that if breakers are expensive, the model accepts more fault-impact risk and may choose zero DCCBs. If breakers are cheap, the model installs more of them, typically two or three DCCBs. In the intermediate cost range, one DCCB becomes the economic sweet spot.",
                            "The first DCCB significantly reduces fault-impact risk, while the second, third and fourth DCCBs provide progressively smaller additional benefits. This demonstrates a clear diminishing-return effect. As DC cable reliability increases, the economic value of DCCBs decreases, meaning DCCBs become more attractive when cable faults are more likely or more severe."
                      ]
                },
                {
                      "heading": "Recommendations",
                      "points": [
                            {
                                  "label": "Validate on larger HVDC networks",
                                  "text": "The method should be tested on larger and more realistic HVDC networks, including multiple offshore energy hubs, converter stations, DC cable routes and interconnectors."
                            },
                            {
                                  "label": "Add dynamic fault behaviour",
                                  "text": "Future work should include dynamic DC fault behaviour and protection coordination, including fault-current rise rate, converter blocking, DCCB opening time and coordination between multiple DCCBs."
                            },
                            {
                                  "label": "Combine EMT and MILP",
                                  "text": "Combining EMT simulation with MILP-based topology optimisation would make the method more suitable for practical engineering design by linking fast fault dynamics with investment and topology decisions."
                            },
                            {
                                  "label": "Expand reliability metrics",
                                  "text": "The model should include reliability and availability metrics beyond fault-impact cost, such as expected energy not served, offshore wind curtailment, interconnector unavailability and restoration time."
                            }
                      ]
                },
                {
                      "heading": "Economics and Plans",
                      "paragraphs": [
                            "The economic value of DCCB placement should be evaluated not only by equipment cost, but also by avoided outage cost, reduced curtailment, improved availability and enhanced system resilience. DCCBs should be treated as strategic resilience assets for future multiterminal HVDC grids.",
                            "Investment decisions should focus on the marginal benefit of each additional breaker, rather than assuming that more protection is always economically justified. The first DCCB may provide a large reduction in fault-impact risk, while additional breakers may deliver progressively smaller benefits.",
                            "Current market arrangements may not fully reward investments that reduce rare but high-impact HVDC faults. Regulators and system operators may need to define reliability incentives, availability payments or resilience-based investment allowances for HVDC protection systems. This would help ensure that DCCB investment is economically justified and aligned with long-term system security."
                      ]
                }
          ]
    },
    {
          "articleNo": 6,
          "title": "Learning-Assisted Scheduling of Grid-Forming BESS for Frequency-Secure Inverter-Dominated Grids",
          "date": "2026-06-17",
          "topic": "Grid-Forming BESS & Frequency Security",
          "readTime": "11 min",
          "imageTone": "storage",
          "sourceTitle": "Fan Jiang and Xingpeng Li, arXiv:2606.05534",
          "sourceUrl": "https://arxiv.org/abs/2606.05534",
          "tags": [
                "grid-forming BESS",
                "frequency security",
                "day-ahead scheduling",
                "EMT simulation",
                "surrogate model",
                "RoCoF"
          ],
          "slug": "learning-assisted-scheduling-grid-forming-bess-frequency-secure-grids",
          "excerpt": "A review of how EMT-trained surrogate models can help schedule grid-forming BESS for both economic operation and frequency security in inverter-dominated power systems.",
          "sections": [
                {
                      "heading": "Executive Summary",
                      "paragraphs": [
                            "Traditional power systems are supported by many synchronous generators. These machines provide physical inertia, which helps stabilise system frequency when the grid experiences a generation loss or load fluctuation. As wind generation, photovoltaic generation and battery energy storage systems become increasingly connected through power electronic inverters, synchronous generation declines and system inertia falls.",
                            "Lower inertia may increase the rate of change of frequency, RoCoF, and reduce the time available for corrective control after a contingency such as the tripping of a large generator. Conventional grid-following inverters rely on an existing voltage waveform and a sufficiently strong grid, while grid-forming inverters can establish voltage magnitude and phase angle, enabling synthetic inertia, fast frequency response and improved low-inertia operation.",
                            "This paper proposes a learning-assisted day-ahead energy scheduling framework for inverter-dominated grids with grid-forming BESS. EMT simulation data are used to train a surrogate model that captures the frequency-support dynamics of grid-forming BESS. The surrogate model is then embedded into day-ahead scheduling so that BESS operation can be optimised while respecting frequency-security constraints.",
                            "For future UK and international networks, the key lesson is that offshore wind, BESS and other inverter-based resources should not be planned only as steady-state MW or MWh assets. Their dynamic contribution to frequency security must also be modelled, scheduled and valued."
                      ]
                },
                {
                      "heading": "Technical Framing",
                      "paragraphs": [
                            "Accurately integrating grid-forming BESS into day-ahead energy scheduling is difficult because frequency-security metrics such as RoCoF and frequency nadir are governed by fast transient dynamics. These dynamics are best captured by electromagnetic transient, EMT, simulation, but EMT simulation is too computationally expensive to embed directly in large operational scheduling models.",
                            "The proposed Learning-Assisted Day-Ahead Energy Scheduling, LA-DAES, method first uses EMT simulation to generate high-fidelity frequency-response data. A surrogate model is then trained to predict frequency-security metrics and transient reserve requirements for grid-forming BESS. Finally, this surrogate model is embedded into the day-ahead scheduling problem, allowing the system operator to schedule GFM BESS while maintaining frequency security.",
                            "Compared with conventional analytical frequency-constrained DAES, this approach can represent grid frequency metrics more accurately and improve the utilisation of GFM BESS."
                      ],
                      "points": [
                            {
                                  "label": "BESS state of charge",
                                  "text": "The state of charge, SOC, of a BESS is critical for frequency support. If SOC is too low, the BESS may not have sufficient energy to support the grid after a contingency. If SOC is too high, the BESS may have limited ability to absorb excess power. Grid-forming BESS should therefore be scheduled not only for energy arbitrage, but also to preserve sufficient SOC and power headroom for fast frequency support."
                            },
                            {
                                  "label": "Surrogate model",
                                  "text": "A learning-assisted surrogate model bridges EMT-level dynamic accuracy and the computational tractability required for day-ahead scheduling. Conventional scheduling mainly minimises generation cost while satisfying load balance, generator constraints, network constraints and BESS SOC limits. In inverter-dominated grids, the lowest-cost schedule may not be frequency-secure, so frequency-security constraints should be embedded directly into day-ahead scheduling."
                            },
                            {
                                  "label": "Methodology",
                                  "text": "The workflow is: build a traditional DAES benchmark; use EMT simulation to produce RoCoF, frequency nadir and GFM BESS support requirements; train a ReLU neural-network surrogate model; then embed the surrogate model into DAES so that GFM BESS can be scheduled while respecting both economic and frequency-security constraints."
                            }
                      ]
                },
                {
                      "heading": "Recommendations",
                      "points": [
                            {
                                  "label": "Extend validation to larger systems",
                                  "text": "The proposed framework should be validated on larger and more realistic transmission networks, including multiple grid-forming BESS units, renewable-rich zones, weak-grid areas, regional frequency dynamics and HVDC interfaces."
                            },
                            {
                                  "label": "Include uncertainty quantification",
                                  "text": "Surrogate-model prediction errors should be quantified through confidence intervals, prediction error bounds or robust optimisation constraints. Inaccurate prediction of RoCoF, frequency nadir or BESS reserve requirements could otherwise create an apparently feasible but operationally insecure schedule."
                            },
                            {
                                  "label": "Consider BESS degradation and lifecycle cost",
                                  "text": "Fast frequency response, frequent SOC movement and high-power transient support may accelerate battery ageing. Degradation cost should be included so that the economic assessment does not overuse BESS stability services without accounting for long-term asset impact."
                            },
                            {
                                  "label": "Benchmark against field data",
                                  "text": "The EMT-based approach should be benchmarked against real grid-forming BESS projects, including frequency events, fault ride-through records, active-power response, SOC movement and converter limits."
                            },
                            {
                                  "label": "Develop an implementation roadmap",
                                  "text": "System operators need a practical roadmap covering EMT model governance, data requirements, surrogate model retraining, cybersecurity, fallback procedures, validation criteria and integration with existing scheduling tools."
                            }
                      ]
                },
                {
                      "heading": "Economics and Plans",
                      "points": [
                            {
                                  "label": "Economic value",
                                  "text": "Grid-forming BESS should not be valued only as an energy-arbitrage asset. Its value also comes from fast stability services, including RoCoF reduction, frequency nadir improvement, synthetic inertia, transient active-power support and frequency-security provision after credible contingencies."
                            },
                            {
                                  "label": "Cost trade-off",
                                  "text": "Frequency security has an opportunity cost. If a BESS must preserve SOC and power headroom for frequency support, it may have less capacity available for energy arbitrage. System operators therefore need to co-optimise energy dispatch, operating cost, SOC management and transient frequency-security requirements."
                            },
                            {
                                  "label": "Market design",
                                  "text": "Future electricity markets may need dedicated revenue streams for grid-forming services, including fast frequency response, synthetic inertia, transient reserve, grid-forming availability and voltage-support capability."
                            },
                            {
                                  "label": "Planning implications",
                                  "text": "Power system planning should assess the dynamic frequency value of GFM BESS, not only its MWh energy capacity. BESS siting and sizing should consider low-inertia regions, renewable-rich areas, weak-grid locations and zones where rapid frequency support provides the highest system value."
                            },
                            {
                                  "label": "Deployment plan",
                                  "text": "A practical deployment plan could include four stages: build an offline EMT simulation database for credible operating points and contingencies; train and validate the surrogate model; embed the trained surrogate into day-ahead scheduling; then use real operational data to monitor performance and periodically retrain the model."
                            }
                      ]
                },
                {
                      "heading": "Conclusion",
                      "paragraphs": [
                            "LA-DAES offers a pathway to convert second-scale EMT dynamic knowledge into hour-scale operational scheduling decisions. This allows grid-forming BESS to be scheduled not only for cost efficiency, but also for secure operation in low-inertia, inverter-dominated power systems."
                      ]
                }
          ]
    },
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
