


gsap.to(".logo", {
    rotation: 360, 
    duration: 5, 
    ease: "elastic",
    x: 0, 
    duration: 10
    
});



    gsap.to('.vue', {
        duration: 4, 
        scale: 0, 
        transformOrigin: "right bottom", 
        ease: "sine.inOut", 
        onComplete: function() {
          smoothOriginChange(".vue", "left top");
          gsap.to(".vue", {duration: 4, scale: 1});
        }
      });
      
      function smoothOriginChange(targets, transformOrigin) {
        gsap.utils.toArray(targets).forEach(function(target) {
          var before = target.getBoundingClientRect();
          gsap.set(target, {transformOrigin: transformOrigin});
          var after = target.getBoundingClientRect();
          gsap.set(target, {x:0, y:0});
        });
      }


      gsap.to('.femmes', {
        duration: 4, 
        scale: 0, 
        transformOrigin: "right bottom", 
        ease: "sine.inOut", 
        onComplete: function() {
          smoothOriginChange(".femmes", "left top");
          gsap.to(".femmes", {duration: 4, scale: 1});
        }
      });
      
      function smoothOriginChange(targets, transformOrigin) {
        gsap.utils.toArray(targets).forEach(function(target) {
          var before = target.getBoundingClientRect();
          gsap.set(target, {transformOrigin: transformOrigin});
          var after = target.getBoundingClientRect();
          gsap.set(target, {x:0, y:0});
        });
      }      


      gsap.to('.black', {
        duration: 4, 
        scale: 0, 
        transformOrigin: "right bottom", 
        ease: "sine.inOut", 
        onComplete: function() {
          smoothOriginChange(".black", "left top");
          gsap.to(".black", {duration: 4, scale: 1});
        }
      });
      
      function smoothOriginChange(targets, transformOrigin) {
        gsap.utils.toArray(targets).forEach(function(target) {
          var before = target.getBoundingClientRect();
          gsap.set(target, {transformOrigin: transformOrigin});
          var after = target.getBoundingClientRect();
          gsap.set(target, {x:0, y:0});
        });
      }     
      
      gsap.to('.salon_coiffure', {
        duration: 4, 
        scale: 0, 
        transformOrigin: "right bottom", 
        ease: "sine.inOut", 
        onComplete: function() {
          smoothOriginChange(".salon_coiffure", "left top");
          gsap.to(".salon_coiffure", {duration: 4, scale: 1});
        }
      });
      
      function smoothOriginChange(targets, transformOrigin) {
        gsap.utils.toArray(targets).forEach(function(target) {
          var before = target.getBoundingClientRect();
          gsap.set(target, {transformOrigin: transformOrigin});
          var after = target.getBoundingClientRect();
          gsap.set(target, {x:0, y:0});
        });
      }   


