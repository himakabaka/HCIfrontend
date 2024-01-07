<template>
  <div class="panel">
    <h1 class="title">Arxiv topic list</h1>
    <div id="category-list" class="categories" style="display:block">
      <p id="cat-astro-ph" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph" target="_blank">Astrophysics (astro-ph)</a>
      </p>
      <p id="cat-astro-ph.GA" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.GA" target="_blank">Astrophysics of Galaxies (astro-ph.GA)</a>
      </p>
      <p id="cat-astro-ph.CO" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.CO" target="_blank">Cosmology and Nongalactic Astrophysics (astro-ph.CO)</a>
      </p>
      <p id="cat-astro-ph.EP" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.EP" target="_blank">Earth and Planetary Astrophysics (astro-ph.EP)</a>
      </p>
      <p id="cat-astro-ph.HE" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.HE" target="_blank">High Energy Astrophysical Phenomena (astro-ph.HE)</a>
      </p>
      <p id="cat-astro-ph.IM" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.IM" target="_blank">Instrumentation and Methods for Astrophysics (astro-ph.IM)</a>
      </p>
      <p id="cat-astro-ph.SR" class="category-item" style="display:none">
        <a href="/arxiv/astro-ph.SR" target="_blank">Solar and Stellar Astrophysics (astro-ph.SR)</a>
      </p>
      <p id="cat-cond-mat" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat" target="_blank">Condensed Matter (cond-mat)</a>
      </p>
      <p id="cat-cond-mat.dis-nn" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.dis-nn" target="_blank">Disordered Systems and Neural Networks (cond-mat.dis-nn)</a>
      </p>
      <p id="cat-cond-mat.mtrl-sci" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.mtrl-sci" target="_blank">Materials Science (cond-mat.mtrl-sci)</a>
      </p>
      <p id="cat-cond-mat.mes-hall" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.mes-hall" target="_blank">Mesoscale and Nanoscale Physics (cond-mat.mes-hall)</a>
      </p>
      <p id="cat-cond-mat.other" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.other" target="_blank">Other Condensed Matter (cond-mat.other)</a>
      </p>
      <p id="cat-cond-mat.quant-gas" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.quant-gas" target="_blank">Quantum Gases (cond-mat.quant-gas)</a>
      </p>
      <p id="cat-cond-mat.soft" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.soft" target="_blank">Soft Condensed Matter (cond-mat.soft)</a>
      </p>
      <p id="cat-cond-mat.stat-mech" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.stat-mech" target="_blank">Statistical Mechanics (cond-mat.stat-mech)</a>
      </p>
      <p id="cat-cond-mat.str-el" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.str-el" target="_blank">Strongly Correlated Electrons (cond-mat.str-el)</a>
      </p>
      <p id="cat-cond-mat.supr-con" class="category-item" style="display:none">
        <a href="/arxiv/cond-mat.supr-con" target="_blank">Superconductivity (cond-mat.supr-con)</a>
      </p>
      <p id="cat-gr-qc" class="category-item" style="display:none">
        <a href="/arxiv/gr-qc" target="_blank">General Relativity and Quantum Cosmology (gr-qc)</a>
      </p>
      <p id="cat-hep-ex" class="category-item" style="display:none">
        <a href="/arxiv/hep-ex" target="_blank">High Energy Physics - Experiment (hep-ex)</a>
      </p>
      <p id="cat-hep-lat" class="category-item" style="display:none">
        <a href="/arxiv/hep-lat" target="_blank">High Energy Physics - Lattice (hep-lat)</a>
      </p>
      <p id="cat-hep-ph" class="category-item" style="display:none">
        <a href="/arxiv/hep-ph" target="_blank">High Energy Physics - Phenomenology (hep-ph)</a>
      </p>
      <p id="cat-hep-th" class="category-item" style="display:none">
        <a href="/arxiv/hep-th" target="_blank">High Energy Physics - Theory (hep-th)</a>
      </p>
      <p id="cat-math-ph" class="category-item" style="display:none">
        <a href="/arxiv/math-ph" target="_blank">Mathematical Physics (math-ph)</a>
      </p>
      <p id="cat-nlin" class="category-item" style="display:none">
        <a href="/arxiv/nlin" target="_blank">Nonlinear Sciences (nlin)</a>
      </p>
      <p id="cat-nlin.AO" class="category-item" style="display:none">
        <a href="/arxiv/nlin.AO" target="_blank">Adaptation and Self-Organizing Systems (nlin.AO)</a>
      </p>
      <p id="cat-nlin.CG" class="category-item" style="display:none">
        <a href="/arxiv/nlin.CG" target="_blank">Cellular Automata and Lattice Gases (nlin.CG)</a>
      </p>
      <p id="cat-nlin.CD" class="category-item" style="display:none">
        <a href="/arxiv/nlin.CD" target="_blank">Chaotic Dynamics (nlin.CD)</a>
      </p>
      <p id="cat-nlin.SI" class="category-item" style="display:none">
        <a href="/arxiv/nlin.SI" target="_blank">Exactly Solvable and Integrable Systems (nlin.SI)</a>
      </p>
      <p id="cat-nlin.PS" class="category-item" style="display:none">
        <a href="/arxiv/nlin.PS" target="_blank">Pattern Formation and Solitons (nlin.PS)</a>
      </p>
      <p id="cat-nucl-ex" class="category-item" style="display:none">
        <a href="/arxiv/nucl-ex" target="_blank">Nuclear Experiment (nucl-ex)</a>
      </p>
      <p id="cat-nucl-th" class="category-item" style="display:none">
        <a href="/arxiv/nucl-th" target="_blank">Nuclear Theory (nucl-th)</a>
      </p>
      <p id="cat-physics" class="category-item" style="display:none">
        <a href="/arxiv/physics" target="_blank">Physics (physics)</a>
      </p>
      <p id="cat-physics.acc-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.acc-ph" target="_blank">Accelerator Physics (physics.acc-ph)</a>
      </p>
      <p id="cat-physics.app-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.app-ph" target="_blank">Applied Physics (physics.app-ph)</a>
      </p>
      <p id="cat-physics.ao-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.ao-ph" target="_blank">Atmospheric and Oceanic Physics (physics.ao-ph)</a>
      </p>
      <p id="cat-physics.atm-clus" class="category-item" style="display:none">
        <a href="/arxiv/physics.atm-clus" target="_blank">Atomic and Molecular Clusters (physics.atm-clus)</a>
      </p>
      <p id="cat-physics.atom-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.atom-ph" target="_blank">Atomic Physics (physics.atom-ph)</a>
      </p>
      <p id="cat-physics.bio-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.bio-ph" target="_blank">Biological Physics (physics.bio-ph)</a>
      </p>
      <p id="cat-physics.chem-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.chem-ph" target="_blank">Chemical Physics (physics.chem-ph)</a>
      </p>
      <p id="cat-physics.class-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.class-ph" target="_blank">Classical Physics (physics.class-ph)</a>
      </p>
      <p id="cat-physics.comp-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.comp-ph" target="_blank">Computational Physics (physics.comp-ph)</a>
      </p>
      <p id="cat-physics.data-an" class="category-item" style="display:none">
        <a href="/arxiv/physics.data-an" target="_blank">Data Analysis, Statistics and Probability (physics.data-an)</a>
      </p>
      <p id="cat-physics.flu-dyn" class="category-item" style="display:none">
        <a href="/arxiv/physics.flu-dyn" target="_blank">Fluid Dynamics (physics.flu-dyn)</a>
      </p>
      <p id="cat-physics.gen-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.gen-ph" target="_blank">General Physics (physics.gen-ph)</a>
      </p>
      <p id="cat-physics.geo-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.geo-ph" target="_blank">Geophysics (physics.geo-ph)</a>
      </p>
      <p id="cat-physics.hist-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.hist-ph" target="_blank">History and Philosophy of Physics (physics.hist-ph)</a>
      </p>
      <p id="cat-physics.ins-det" class="category-item" style="display:none">
        <a href="/arxiv/physics.ins-det" target="_blank">Instrumentation and Detectors (physics.ins-det)</a>
      </p>
      <p id="cat-physics.med-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.med-ph" target="_blank">Medical Physics (physics.med-ph)</a>
      </p>
      <p id="cat-physics.optics" class="category-item" style="display:none">
        <a href="/arxiv/physics.optics" target="_blank">Optics (physics.optics)</a>
      </p>
      <p id="cat-physics.soc-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.soc-ph" target="_blank">Physics and Society (physics.soc-ph)</a>
      </p>
      <p id="cat-physics.ed-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.ed-ph" target="_blank">Physics Education (physics.ed-ph)</a>
      </p>
      <p id="cat-physics.plasm-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.plasm-ph" target="_blank">Plasma Physics (physics.plasm-ph)</a>
      </p>
      <p id="cat-physics.pop-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.pop-ph" target="_blank">Popular Physics (physics.pop-ph)</a>
      </p>
      <p id="cat-physics.space-ph" class="category-item" style="display:none">
        <a href="/arxiv/physics.space-ph" target="_blank">Space Physics (physics.space-ph)</a>
      </p>
      <p id="cat-quant-ph" class="category-item" style="display:none">
        <a href="/arxiv/quant-ph" target="_blank">Quantum Physics (quant-ph)</a>
      </p>
      <p id="cat-math" class="category-item" style="display:none">
        <a href="/arxiv/math" target="_blank">Mathematics (math)</a>
      </p>
      <p id="cat-math.AG" class="category-item" style="display:none">
        <a href="/arxiv/math.AG" target="_blank">Algebraic Geometry (math.AG)</a>
      </p>
      <p id="cat-math.AT" class="category-item" style="display:none">
        <a href="/arxiv/math.AT" target="_blank">Algebraic Topology (math.AT)</a>
      </p>
      <p id="cat-math.AP" class="category-item" style="display:none">
        <a href="/arxiv/math.AP" target="_blank">Analysis of PDEs (math.AP)</a>
      </p>
      <p id="cat-math.CT" class="category-item" style="display:none">
        <a href="/arxiv/math.CT" target="_blank">Category Theory (math.CT)</a>
      </p>
      <p id="cat-math.CA" class="category-item" style="display:none">
        <a href="/arxiv/math.CA" target="_blank">Classical Analysis and ODEs (math.CA)</a>
      </p>
      <p id="cat-math.CO" class="category-item" style="display:none">
        <a href="/arxiv/math.CO" target="_blank">Combinatorics (math.CO)</a>
      </p>
      <p id="cat-math.AC" class="category-item" style="display:none">
        <a href="/arxiv/math.AC" target="_blank">Commutative Algebra (math.AC)</a>
      </p>
      <p id="cat-math.CV" class="category-item" style="display:none">
        <a href="/arxiv/math.CV" target="_blank">Complex Variables (math.CV)</a>
      </p>
      <p id="cat-math.DG" class="category-item" style="display:none">
        <a href="/arxiv/math.DG" target="_blank">Differential Geometry (math.DG)</a>
      </p>
      <p id="cat-math.DS" class="category-item" style="display:none">
        <a href="/arxiv/math.DS" target="_blank">Dynamical Systems (math.DS)</a>
      </p>
      <p id="cat-math.FA" class="category-item" style="display:none">
        <a href="/arxiv/math.FA" target="_blank">Functional Analysis (math.FA)</a>
      </p>
      <p id="cat-math.GM" class="category-item" style="display:none">
        <a href="/arxiv/math.GM" target="_blank">General Mathematics (math.GM)</a>
      </p>
      <p id="cat-math.GN" class="category-item" style="display:none">
        <a href="/arxiv/math.GN" target="_blank">General Topology (math.GN)</a>
      </p>
      <p id="cat-math.GT" class="category-item" style="display:none">
        <a href="/arxiv/math.GT" target="_blank">Geometric Topology (math.GT)</a>
      </p>
      <p id="cat-math.GR" class="category-item" style="display:none">
        <a href="/arxiv/math.GR" target="_blank">Group Theory (math.GR)</a>
      </p>
      <p id="cat-math.HO" class="category-item" style="display:none">
        <a href="/arxiv/math.HO" target="_blank">History and Overview (math.HO)</a>
      </p>
      <p id="cat-math.IT" class="category-item" style="display:none">
        <a href="/arxiv/math.IT" target="_blank">Information Theory (math.IT)</a>
      </p>
      <p id="cat-math.KT" class="category-item" style="display:none">
        <a href="/arxiv/math.KT" target="_blank">K-Theory and Homology (math.KT)</a>
      </p>
      <p id="cat-math.LO" class="category-item" style="display:none">
        <a href="/arxiv/math.LO" target="_blank">Logic (math.LO)</a>
      </p>
      <p id="cat-math.MP" class="category-item" style="display:none">
        <a href="/arxiv/math.MP" target="_blank">Mathematical Physics (math.MP)</a>
      </p>
      <p id="cat-math.MG" class="category-item" style="display:none">
        <a href="/arxiv/math.MG" target="_blank">Metric Geometry (math.MG)</a>
      </p>
      <p id="cat-math.NT" class="category-item" style="display:none">
        <a href="/arxiv/math.NT" target="_blank">Number Theory (math.NT)</a>
      </p>
      <p id="cat-math.NA" class="category-item" style="display:none">
        <a href="/arxiv/math.NA" target="_blank">Numerical Analysis (math.NA)</a>
      </p>
      <p id="cat-math.OA" class="category-item" style="display:none">
        <a href="/arxiv/math.OA" target="_blank">Operator Algebras (math.OA)</a>
      </p>
      <p id="cat-math.OC" class="category-item" style="display:none">
        <a href="/arxiv/math.OC" target="_blank">Optimization and Control (math.OC)</a>
      </p>
      <p id="cat-math.PR" class="category-item" style="display:none">
        <a href="/arxiv/math.PR" target="_blank">Probability (math.PR)</a>
      </p>
      <p id="cat-math.QA" class="category-item" style="display:none">
        <a href="/arxiv/math.QA" target="_blank">Quantum Algebra (math.QA)</a>
      </p>
      <p id="cat-math.RT" class="category-item" style="display:none">
        <a href="/arxiv/math.RT" target="_blank">Representation Theory (math.RT)</a>
      </p>
      <p id="cat-math.RA" class="category-item" style="display:none">
        <a href="/arxiv/math.RA" target="_blank">Rings and Algebras (math.RA)</a>
      </p>
      <p id="cat-math.SP" class="category-item" style="display:none">
        <a href="/arxiv/math.SP" target="_blank">Spectral Theory (math.SP)</a>
      </p>
      <p id="cat-math.ST" class="category-item" style="display:none">
        <a href="/arxiv/math.ST" target="_blank">Statistics Theory (math.ST)</a>
      </p>
      <p id="cat-math.SG" class="category-item" style="display:none">
        <a href="/arxiv/math.SG" target="_blank">Symplectic Geometry (math.SG)</a>
      </p>
      <p id="cat-cs" class="category-item" style="display:none">
        <a href="/arxiv/cs" target="_blank">Computer Science (cs)</a>
      </p>
      <p id="cat-cs.AI" class="category-item" style="display:none">
        <a href="/arxiv/cs.AI" target="_blank">Artificial Intelligence (cs.AI)</a>
      </p>
      <p id="cat-cs.CL" class="category-item" style="display:none">
        <a href="/arxiv/cs.CL" target="_blank">Computation and Language (cs.CL)</a>
      </p>
      <p id="cat-cs.CC" class="category-item" style="display:none">
        <a href="/arxiv/cs.CC" target="_blank">Computational Complexity (cs.CC)</a>
      </p>
      <p id="cat-cs.CE" class="category-item" style="display:none">
        <a href="/arxiv/cs.CE" target="_blank">Computational Engineering, Finance, and Science (cs.CE)</a>
      </p>
      <p id="cat-cs.CG" class="category-item" style="display:none">
        <a href="/arxiv/cs.CG" target="_blank">Computational Geometry (cs.CG)</a>
      </p>
      <p id="cat-cs.GT" class="category-item" style="display:none">
        <a href="/arxiv/cs.GT" target="_blank">Computer Science and Game Theory (cs.GT)</a>
      </p>
      <p id="cat-cs.CV" class="category-item" style="display:none">
        <a href="/arxiv/cs.CV" target="_blank">Computer Vision and Pattern Recognition (cs.CV)</a>
      </p>
      <p id="cat-cs.CY" class="category-item" style="display:none">
        <a href="/arxiv/cs.CY" target="_blank">Computers and Society (cs.CY)</a>
      </p>
      <p id="cat-cs.CR" class="category-item" style="display:none">
        <a href="/arxiv/cs.CR" target="_blank">Cryptography and Security (cs.CR)</a>
      </p>
      <p id="cat-cs.DS" class="category-item" style="display:none">
        <a href="/arxiv/cs.DS" target="_blank">Data Structures and Algorithms (cs.DS)</a>
      </p>
      <p id="cat-cs.DB" class="category-item" style="display:none">
        <a href="/arxiv/cs.DB" target="_blank">Databases (cs.DB)</a>
      </p>
      <p id="cat-cs.DL" class="category-item" style="display:none">
        <a href="/arxiv/cs.DL" target="_blank">Digital Libraries (cs.DL)</a>
      </p>
      <p id="cat-cs.DM" class="category-item" style="display:none">
        <a href="/arxiv/cs.DM" target="_blank">Discrete Mathematics (cs.DM)</a>
      </p>
      <p id="cat-cs.DC" class="category-item" style="display:none">
        <a href="/arxiv/cs.DC" target="_blank">Distributed, Parallel, and Cluster Computing (cs.DC)</a>
      </p>
      <p id="cat-cs.ET" class="category-item" style="display:none">
        <a href="/arxiv/cs.ET" target="_blank">Emerging Technologies (cs.ET)</a>
      </p>
      <p id="cat-cs.FL" class="category-item" style="display:none">
        <a href="/arxiv/cs.FL" target="_blank">Formal Languages and Automata Theory (cs.FL)</a>
      </p>
      <p id="cat-cs.GL" class="category-item" style="display:none">
        <a href="/arxiv/cs.GL" target="_blank">General Literature (cs.GL)</a>
      </p>
      <p id="cat-cs.GR" class="category-item" style="display:none">
        <a href="/arxiv/cs.GR" target="_blank">Graphics (cs.GR)</a>
      </p>
      <p id="cat-cs.AR" class="category-item" style="display:none">
        <a href="/arxiv/cs.AR" target="_blank">Hardware Architecture (cs.AR)</a>
      </p>
      <p id="cat-cs.HC" class="category-item" style="display:none">
        <a href="/arxiv/cs.HC" target="_blank">Human-Computer Interaction (cs.HC)</a>
      </p>
      <p id="cat-cs.IR" class="category-item" style="display:none">
        <a href="/arxiv/cs.IR" target="_blank">Information Retrieval (cs.IR)</a>
      </p>
      <p id="cat-cs.IT" class="category-item" style="display:none">
        <a href="/arxiv/cs.IT" target="_blank">Information Theory (cs.IT)</a>
      </p>
      <p id="cat-cs.LO" class="category-item" style="display:none">
        <a href="/arxiv/cs.LO" target="_blank">Logic in Computer Science (cs.LO)</a>
      </p>
      <p id="cat-cs.LG" class="category-item" style="display:none">
        <a href="/arxiv/cs.LG" target="_blank">Machine Learning (cs.LG)</a>
      </p>
      <p id="cat-cs.MS" class="category-item" style="display:none">
        <a href="/arxiv/cs.MS" target="_blank">Mathematical Software (cs.MS)</a>
      </p>
      <p id="cat-cs.MA" class="category-item" style="display:none">
        <a href="/arxiv/cs.MA" target="_blank">Multiagent Systems (cs.MA)</a>
      </p>
      <p id="cat-cs.MM" class="category-item" style="display:none">
        <a href="/arxiv/cs.MM" target="_blank">Multimedia (cs.MM)</a>
      </p>
      <p id="cat-cs.NI" class="category-item" style="display:none">
        <a href="/arxiv/cs.NI" target="_blank">Networking and Internet Architecture (cs.NI)</a>
      </p>
      <p id="cat-cs.NE" class="category-item" style="display:none">
        <a href="/arxiv/cs.NE" target="_blank">Neural and Evolutionary Computing (cs.NE)</a>
      </p>
      <p id="cat-cs.NA" class="category-item" style="display:none">
        <a href="/arxiv/cs.NA" target="_blank">Numerical Analysis (cs.NA)</a>
      </p>
      <p id="cat-cs.OS" class="category-item" style="display:none">
        <a href="/arxiv/cs.OS" target="_blank">Operating Systems (cs.OS)</a>
      </p>
      <p id="cat-cs.OH" class="category-item" style="display:none">
        <a href="/arxiv/cs.OH" target="_blank">Other Computer Science (cs.OH)</a>
      </p>
      <p id="cat-cs.PF" class="category-item" style="display:none">
        <a href="/arxiv/cs.PF" target="_blank">Performance (cs.PF)</a>
      </p>
      <p id="cat-cs.PL" class="category-item" style="display:none">
        <a href="/arxiv/cs.PL" target="_blank">Programming Languages (cs.PL)</a>
      </p>
      <p id="cat-cs.RO" class="category-item" style="display:none">
        <a href="/arxiv/cs.RO" target="_blank">Robotics (cs.RO)</a>
      </p>
      <p id="cat-cs.SI" class="category-item" style="display:none">
        <a href="/arxiv/cs.SI" target="_blank">Social and Information Networks (cs.SI)</a>
      </p>
      <p id="cat-cs.SE" class="category-item" style="display:none">
        <a href="/arxiv/cs.SE" target="_blank">Software Engineering (cs.SE)</a>
      </p>
      <p id="cat-cs.SD" class="category-item" style="display:none">
        <a href="/arxiv/cs.SD" target="_blank">Sound (cs.SD)</a>
      </p>
      <p id="cat-cs.SC" class="category-item" style="display:none">
        <a href="/arxiv/cs.SC" target="_blank">Symbolic Computation (cs.SC)</a>
      </p>
      <p id="cat-cs.SY" class="category-item" style="display:none">
        <a href="/arxiv/cs.SY" target="_blank">Systems and Control (cs.SY)</a>
      </p>
      <p id="cat-q-bio" class="category-item" style="display:none">
        <a href="/arxiv/q-bio" target="_blank">Quantitative Biology (q-bio)</a>
      </p>
      <p id="cat-q-bio.BM" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.BM" target="_blank">Biomolecules (q-bio.BM)</a>
      </p>
      <p id="cat-q-bio.CB" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.CB" target="_blank">Cell Behavior (q-bio.CB)</a>
      </p>
      <p id="cat-q-bio.GN" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.GN" target="_blank">Genomics (q-bio.GN)</a>
      </p>
      <p id="cat-q-bio.MN" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.MN" target="_blank">Molecular Networks (q-bio.MN)</a>
      </p>
      <p id="cat-q-bio.NC" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.NC" target="_blank">Neurons and Cognition (q-bio.NC)</a>
      </p>
      <p id="cat-q-bio.OT" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.OT" target="_blank">Other Quantitative Biology (q-bio.OT)</a>
      </p>
      <p id="cat-q-bio.PE" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.PE" target="_blank">Populations and Evolution (q-bio.PE)</a>
      </p>
      <p id="cat-q-bio.QM" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.QM" target="_blank">Quantitative Methods (q-bio.QM)</a>
      </p>
      <p id="cat-q-bio.SC" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.SC" target="_blank">Subcellular Processes (q-bio.SC)</a>
      </p>
      <p id="cat-q-bio.TO" class="category-item" style="display:none">
        <a href="/arxiv/q-bio.TO" target="_blank">Tissues and Organs (q-bio.TO)</a>
      </p>
      <p id="cat-q-fin" class="category-item" style="display:none">
        <a href="/arxiv/q-fin" target="_blank">Quantitative Finance (q-fin)</a>
      </p>
      <p id="cat-q-fin.CP" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.CP" target="_blank">Computational Finance (q-fin.CP)</a>
      </p>
      <p id="cat-q-fin.EC" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.EC" target="_blank">Economics (q-fin.EC)</a>
      </p>
      <p id="cat-q-fin.GN" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.GN" target="_blank">General Finance (q-fin.GN)</a>
      </p>
      <p id="cat-q-fin.MF" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.MF" target="_blank">Mathematical Finance (q-fin.MF)</a>
      </p>
      <p id="cat-q-fin.PM" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.PM" target="_blank">Portfolio Management (q-fin.PM)</a>
      </p>
      <p id="cat-q-fin.PR" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.PR" target="_blank">Pricing of Securities (q-fin.PR)</a>
      </p>
      <p id="cat-q-fin.RM" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.RM" target="_blank">Risk Management (q-fin.RM)</a>
      </p>
      <p id="cat-q-fin.ST" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.ST" target="_blank">Statistical Finance (q-fin.ST)</a>
      </p>
      <p id="cat-q-fin.TR" class="category-item" style="display:none">
        <a href="/arxiv/q-fin.TR" target="_blank">Trading and Market Microstructure (q-fin.TR)</a>
      </p>
      <p id="cat-stat" class="category-item" style="display:none">
        <a href="/arxiv/stat" target="_blank">Statistics (stat)</a>
      </p>
      <p id="cat-stat.AP" class="category-item" style="display:none">
        <a href="/arxiv/stat.AP" target="_blank">Applications (stat.AP)</a>
      </p>
      <p id="cat-stat.CO" class="category-item" style="display:none">
        <a href="/arxiv/stat.CO" target="_blank">Computation (stat.CO)</a>
      </p>
      <p id="cat-stat.ML" class="category-item" style="display:none">
        <a href="/arxiv/stat.ML" target="_blank">Machine Learning (stat.ML)</a>
      </p>
      <p id="cat-stat.ME" class="category-item" style="display:none">
        <a href="/arxiv/stat.ME" target="_blank">Methodology (stat.ME)</a>
      </p>
      <p id="cat-stat.OT" class="category-item" style="display:none">
        <a href="/arxiv/stat.OT" target="_blank">Other Statistics (stat.OT)</a>
      </p>
      <p id="cat-stat.TH" class="category-item" style="display:none">
        <a href="/arxiv/stat.TH" target="_blank">Statistics Theory (stat.TH)</a>
      </p>
      <p id="cat-eess" class="category-item" style="display:none">
        <a href="/arxiv/eess" target="_blank">Electrical Engineering and Systems Science (eess)</a>
      </p>
      <p id="cat-eess.AS" class="category-item" style="display:none">
        <a href="/arxiv/eess.AS" target="_blank">Audio and Speech Processing (eess.AS)</a>
      </p>
      <p id="cat-eess.IV" class="category-item" style="display:none">
        <a href="/arxiv/eess.IV" target="_blank">Image and Video Processing (eess.IV)</a>
      </p>
      <p id="cat-eess.SP" class="category-item" style="display:none">
        <a href="/arxiv/eess.SP" target="_blank">Signal Processing (eess.SP)</a>
      </p>
      <p id="cat-eess.SY" class="category-item" style="display:none">
        <a href="/arxiv/eess.SY" target="_blank">Systems and Control (eess.SY)</a>
      </p>
      <p id="cat-econ" class="category-item" style="display:none">
        <a href="/arxiv/econ" target="_blank">Economics (econ)</a>
      </p>
      <p id="cat-econ.EM" class="category-item" style="display:none">
        <a href="/arxiv/econ.EM" target="_blank">Econometrics (econ.EM)</a>
      </p>
      <p id="cat-econ.GN" class="category-item" style="display:none">
        <a href="/arxiv/econ.GN" target="_blank">General Economics (econ.GN)</a>
      </p>
      <p id="cat-econ.TH" class="category-item" style="display:none">
        <a href="/arxiv/econ.TH" target="_blank">Theoretical Economics (econ.TH)</a>
      </p>
      <p class="category-item">
        <a id="more" href="#" @click="setCategories();">&gt;&gt;&gt;&gt; Want select more interested topic? click here! &gt;&gt;&gt;&gt;</a>
      </p>
    </div>
    <form id="category-form" style="display:none">
      <div class="categories">
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="astro-ph">
            <strong class="group-first">Astrophysics (astro-ph)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.GA">
            Astrophysics of Galaxies (astro-ph.GA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.CO">
            Cosmology and Nongalactic Astrophysics (astro-ph.CO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.EP">
            Earth and Planetary Astrophysics (astro-ph.EP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.HE">
            High Energy Astrophysical Phenomena (astro-ph.HE)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.IM">
            Instrumentation and Methods for Astrophysics (astro-ph.IM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="astro-ph.SR">
            Solar and Stellar Astrophysics (astro-ph.SR)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="cond-mat">
            <strong class="group-first">Condensed Matter (cond-mat)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.dis-nn">
            Disordered Systems and Neural Networks (cond-mat.dis-nn)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.mtrl-sci">
            Materials Science (cond-mat.mtrl-sci)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.mes-hall">
            Mesoscale and Nanoscale Physics (cond-mat.mes-hall)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.other">
            Other Condensed Matter (cond-mat.other)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.quant-gas">
            Quantum Gases (cond-mat.quant-gas)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.soft">
            Soft Condensed Matter (cond-mat.soft)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.stat-mech">
            Statistical Mechanics (cond-mat.stat-mech)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.str-el">
            Strongly Correlated Electrons (cond-mat.str-el)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cond-mat.supr-con">
            Superconductivity (cond-mat.supr-con)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="gr-qc">
            <strong class="group-first">General Relativity and Quantum Cosmology (gr-qc)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="hep-ex">
            <strong class="group-first">High Energy Physics - Experiment (hep-ex)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="hep-lat">
            <strong class="group-first">High Energy Physics - Lattice (hep-lat)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="hep-ph">
            <strong class="group-first">High Energy Physics - Phenomenology (hep-ph)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="hep-th">
            <strong class="group-first">High Energy Physics - Theory (hep-th)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="math-ph">
            <strong class="group-first">Mathematical Physics (math-ph)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="nlin">
            <strong class="group-first">Nonlinear Sciences (nlin)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="nlin.AO">
            Adaptation and Self-Organizing Systems (nlin.AO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="nlin.CG">
            Cellular Automata and Lattice Gases (nlin.CG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="nlin.CD">
            Chaotic Dynamics (nlin.CD)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="nlin.SI">
            Exactly Solvable and Integrable Systems (nlin.SI)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="nlin.PS">
            Pattern Formation and Solitons (nlin.PS)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="nucl-ex">
            <strong class="group-first">Nuclear Experiment (nucl-ex)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="nucl-th">
            <strong class="group-first">Nuclear Theory (nucl-th)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="physics">
            <strong class="group-first">Physics (physics)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.acc-ph">
            Accelerator Physics (physics.acc-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.app-ph">
            Applied Physics (physics.app-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.ao-ph">
            Atmospheric and Oceanic Physics (physics.ao-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.atm-clus">
            Atomic and Molecular Clusters (physics.atm-clus)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.atom-ph">
            Atomic Physics (physics.atom-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.bio-ph">
            Biological Physics (physics.bio-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.chem-ph">
            Chemical Physics (physics.chem-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.class-ph">
            Classical Physics (physics.class-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.comp-ph">
            Computational Physics (physics.comp-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.data-an">
            Data Analysis, Statistics and Probability (physics.data-an)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.flu-dyn">
            Fluid Dynamics (physics.flu-dyn)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.gen-ph">
            General Physics (physics.gen-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.geo-ph">
            Geophysics (physics.geo-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.hist-ph">
            History and Philosophy of Physics (physics.hist-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.ins-det">
            Instrumentation and Detectors (physics.ins-det)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.med-ph">
            Medical Physics (physics.med-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.optics">
            Optics (physics.optics)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.soc-ph">
            Physics and Society (physics.soc-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.ed-ph">
            Physics Education (physics.ed-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.plasm-ph">
            Plasma Physics (physics.plasm-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.pop-ph">
            Popular Physics (physics.pop-ph)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="physics.space-ph">
            Space Physics (physics.space-ph)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="quant-ph">
            <strong class="group-first">Quantum Physics (quant-ph)</strong>
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="math">
            <strong class="group-first">Mathematics (math)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.AG">
            Algebraic Geometry (math.AG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.AT">
            Algebraic Topology (math.AT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.AP">
            Analysis of PDEs (math.AP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.CT">
            Category Theory (math.CT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.CA">
            Classical Analysis and ODEs (math.CA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.CO">
            Combinatorics (math.CO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.AC">
            Commutative Algebra (math.AC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.CV">
            Complex Variables (math.CV)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.DG">
            Differential Geometry (math.DG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.DS">
            Dynamical Systems (math.DS)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.FA">
            Functional Analysis (math.FA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.GM">
            General Mathematics (math.GM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.GN">
            General Topology (math.GN)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.GT">
            Geometric Topology (math.GT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.GR">
            Group Theory (math.GR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.HO">
            History and Overview (math.HO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.IT">
            Information Theory (math.IT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.KT">
            K-Theory and Homology (math.KT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.LO">
            Logic (math.LO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.MP">
            Mathematical Physics (math.MP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.MG">
            Metric Geometry (math.MG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.NT">
            Number Theory (math.NT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.NA">
            Numerical Analysis (math.NA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.OA">
            Operator Algebras (math.OA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.OC">
            Optimization and Control (math.OC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.PR">
            Probability (math.PR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.QA">
            Quantum Algebra (math.QA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.RT">
            Representation Theory (math.RT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.RA">
            Rings and Algebras (math.RA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.SP">
            Spectral Theory (math.SP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.ST">
            Statistics Theory (math.ST)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="math.SG">
            Symplectic Geometry (math.SG)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="cs">
            <strong class="group-first">Computer Science (cs)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.AI">
            Artificial Intelligence (cs.AI)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CL">
            Computation and Language (cs.CL)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CC">
            Computational Complexity (cs.CC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CE">
            Computational Engineering, Finance, and Science (cs.CE)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CG">
            Computational Geometry (cs.CG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.GT">
            Computer Science and Game Theory (cs.GT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CV">
            Computer Vision and Pattern Recognition (cs.CV)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CY">
            Computers and Society (cs.CY)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.CR">
            Cryptography and Security (cs.CR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.DS">
            Data Structures and Algorithms (cs.DS)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.DB">
            Databases (cs.DB)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.DL">
            Digital Libraries (cs.DL)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.DM">
            Discrete Mathematics (cs.DM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.DC">
            Distributed, Parallel, and Cluster Computing (cs.DC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.ET">
            Emerging Technologies (cs.ET)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.FL">
            Formal Languages and Automata Theory (cs.FL)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.GL">
            General Literature (cs.GL)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.GR">
            Graphics (cs.GR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.AR">
            Hardware Architecture (cs.AR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.HC">
            Human-Computer Interaction (cs.HC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.IR">
            Information Retrieval (cs.IR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.IT">
            Information Theory (cs.IT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.LO">
            Logic in Computer Science (cs.LO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.LG">
            Machine Learning (cs.LG)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.MS">
            Mathematical Software (cs.MS)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.MA">
            Multiagent Systems (cs.MA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.MM">
            Multimedia (cs.MM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.NI">
            Networking and Internet Architecture (cs.NI)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.NE">
            Neural and Evolutionary Computing (cs.NE)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.NA">
            Numerical Analysis (cs.NA)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.OS">
            Operating Systems (cs.OS)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.OH">
            Other Computer Science (cs.OH)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.PF">
            Performance (cs.PF)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.PL">
            Programming Languages (cs.PL)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.RO">
            Robotics (cs.RO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.SI">
            Social and Information Networks (cs.SI)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.SE">
            Software Engineering (cs.SE)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.SD">
            Sound (cs.SD)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.SC">
            Symbolic Computation (cs.SC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="cs.SY">
            Systems and Control (cs.SY)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="q-bio">
            <strong class="group-first">Quantitative Biology (q-bio)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.BM">
            Biomolecules (q-bio.BM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.CB">
            Cell Behavior (q-bio.CB)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.GN">
            Genomics (q-bio.GN)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.MN">
            Molecular Networks (q-bio.MN)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.NC">
            Neurons and Cognition (q-bio.NC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.OT">
            Other Quantitative Biology (q-bio.OT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.PE">
            Populations and Evolution (q-bio.PE)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.QM">
            Quantitative Methods (q-bio.QM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.SC">
            Subcellular Processes (q-bio.SC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-bio.TO">
            Tissues and Organs (q-bio.TO)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="q-fin">
            <strong class="group-first">Quantitative Finance (q-fin)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.CP">
            Computational Finance (q-fin.CP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.EC">
            Economics (q-fin.EC)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.GN">
            General Finance (q-fin.GN)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.MF">
            Mathematical Finance (q-fin.MF)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.PM">
            Portfolio Management (q-fin.PM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.PR">
            Pricing of Securities (q-fin.PR)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.RM">
            Risk Management (q-fin.RM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.ST">
            Statistical Finance (q-fin.ST)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="q-fin.TR">
            Trading and Market Microstructure (q-fin.TR)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="stat">
            <strong class="group-first">Statistics (stat)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.AP">
            Applications (stat.AP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.CO">
            Computation (stat.CO)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.ML">
            Machine Learning (stat.ML)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.ME">
            Methodology (stat.ME)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.OT">
            Other Statistics (stat.OT)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="stat.TH">
            Statistics Theory (stat.TH)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="eess">
            <strong class="group-first">Electrical Engineering and Systems Science (eess)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="eess.AS">
            Audio and Speech Processing (eess.AS)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="eess.IV">
            Image and Video Processing (eess.IV)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="eess.SP">
            Signal Processing (eess.SP)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="eess.SY">
            Systems and Control (eess.SY)
          </label></p>
        </div>
        <div class="category-group">
          <p><label><input type="checkbox" name="categories" value="econ">
            <strong class="group-first">Economics (econ)</strong>
          </label></p>
          <p><label><input type="checkbox" name="categories" value="econ.EM">
            Econometrics (econ.EM)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="econ.GN">
            General Economics (econ.GN)
          </label></p>
          <p><label><input type="checkbox" name="categories" value="econ.TH">
            Theoretical Economics (econ.TH)
          </label></p>
        </div>
      </div>
      <div class="submit">
        <button type="button" @click="saveCategories();" class="save-btn">Save</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  components: {},
  data(){

  },
  methods:{
    getCategories() {
      let defaultCategories = ['cs.CL', 'cs.LG', 'cs.AI', 'cs.CV', 'stat.ML'];
      let Categories = JSON.parse(localStorage.getItem('Categories')) || defaultCategories;
      return Categories;
    },
    showCategories() {
      let Categories = this.getCategories();
      for (let i = 0; i < Categories.length; i++) {
        var container = document.getElementById('cat-' + Categories[i]);
        container.style.display = 'inline-block';
      }
    },
    setCategories() {
      let Categories = this.getCategories();
      var inputs = document.getElementsByTagName('input');
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (Categories.indexOf(input.value) !== -1) {
          input.checked = true;
        }
      }
      document.getElementById('category-list').style.display = 'none';
      document.getElementById('category-form').style.display = 'block';
    },
    saveCategories() {
      var checkedCategories = [];
      var inputs = document.getElementsByTagName('input');
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checked) {
          checkedCategories.push(input.value);
        }
      }
      let oldCategories = this.getCategories();
      for (let i = 0; i < oldCategories.length; i++) {
        var container = document.getElementById('cat-' + oldCategories[i]);
        container.style.display = 'none';
      }
      localStorage.setItem('Categories', JSON.stringify(checkedCategories));
      this.showCategories();
      document.getElementById('category-list').style.display = 'block';
      document.getElementById('category-form').style.display = 'none';
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    showAnswer() {
      var container = document.getElementById('when-how');
      if (container.style.display === 'none') {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    }
  },
  mounted() {
    // Call your initialization function or any logic when the component is mounted
    this.showCategories();

  },
  created() {

  }

}
</script>
<style >

input[type=checkbox]{
  width: 16px;
  height: 16px;
  margin-top: 2px;
  position: relative;
}
input[type=checkbox]::after {
  position: absolute;
  top: 0;
  color: #000;
  width: 16px;
  height: 16px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: ' ';
  border-radius: 3px;
}
input[type=checkbox]:checked::after {
  content: "✓";
  color: #fff;
  font-size: 10px;
  line-height: 15px;
  background-color: #3498db;
}

body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
}
a, a:visited{
  color: #ff9800;
  text-decoration: none;
}
a:hover{
  color: #f57c00;
}
p img {
  vertical-align: middle;
  height: 16px;
}
.panel {
  width: 80%;
  margin: 20px auto;
  padding: 2px 20px 20px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.title {
  color: #3498db;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}
.categories {
  column-count: 1;
}
.category-group {
  display: inline-block;
  width: 98%;
  color: #ff9800;
  border: #bbb4 1px solid;
  border-radius: 5px;
  padding: 0 5px 0 2px;
  margin: 2px 0 2px 0px;
}
.category-item {
  display: inline-block;
  width: 100%;
  margin: 10px 0 5px 0;
  color: #ff9800;
}
.group-first {
  color: #ff9800;
}
#more {
  color: #3498db;
}
.submit {
  text-align: center;
  padding: 8px;
}
.save-btn {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.save-btn:hover {
  background-color: #2a578a;
}
#about {
  padding-top: 20px
}
.footer {
  text-align: center;
  color: #bbb;
  font-size: 15px;
  padding-bottom: 5px;
}
@media screen and (max-width: 800px) {
  .footer {
    font-size: 15px;
  }
  p {
    font-size: 15px;
  }
}
@media screen and (max-width: 512px) {
  .panel {
    width: 90%;
    padding: 2px 10px 15px 10px;
  }
  .categories {
    column-count: 1;
  }
  .category-item {
    margin: 5px 0 5px 0;
  }
  .title {
    font-size: 20px;
  }
  .save-btn {
    font-size: 13px;
  }
  .footer {
    font-size: 13px;
  }
  p {
    font-size: 13px;
  }
  p img {
    height: 13px;
  }
}


</style>
