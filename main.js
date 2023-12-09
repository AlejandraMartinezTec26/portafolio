let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #2c88e4;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2c88e4;">Soy estudiante de Ingeniería aprendiendo con TECNOLOCHICAS PRO.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();