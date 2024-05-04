const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
  };
  
  ScrollReveal().reveal(".section img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".section .isi", {
      ...scrollRevealOption,
      origin: "right",
  });
  
  ScrollReveal().reveal(".homepage .isi1", {
      ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".home .wrapper1", {
      ...scrollRevealOption,
      origin: "left",
  });
  
  ScrollReveal().reveal(".home .wrapper2", {
      ...scrollRevealOption,
      origin: "right",
  });
  
  ScrollReveal().reveal(".home2 .wrapper3", {
      ...scrollRevealOption,
      origin: "left",
  });
  
  ScrollReveal().reveal(".home2 .wrapper4", {
      ...scrollRevealOption,
      origin: "right",
  });
  