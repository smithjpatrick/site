let cell = document.querySelectorAll('td');

cell.forEach(testFunc);

function myFunc(item, index) {
  let compStyles = window.getComputedStyle(cell[index]);
  let color1 = compStyles.getPropertyValue('color');
  let color2 = compStyles.getPropertyValue('background-color');
  
  let sep1 = color1.indexOf(",") > -1 ? "," : " ";
  let sep2 = color2.indexOf(",") > -1 ? "," : " ";
  // Turn "color1(r,g,b)" into [r,g,b]
  // console.log('sep: ' + sep1);
  // console.log('color before: ' + color1);
  color1 = color1.substr(4).split(")")[0].split(sep1);
  color2 = color2.substr(4).split(")")[0].split(sep2);
  // console.log('color after: ' + color1);

  let r1 = (+color1[0]),
      g1 = (+color1[1]),
      b1 = (+color1[2]);
  let r2 = (+color2[0]),
      g2 = (+color2[1]),
      b2 = (+color2[2]);

  if (r1.length == 1)
    r1 = "0" + r1;
  if (g1.length == 1)
    g1 = "0" + g1;
  if (b1.length == 1)
    b1 = "0" + b1;

  if (r2.length == 1)
    r2 = "0" + r2;
  if (g2.length == 1)
    g2 = "0" + g2;
  if (b2.length == 1)
    b2 = "0" + b2;

    color1 = [r1,g1,b1];
    color2 = [r2,g2,b2];

    // console.log('RGB value of font color\n' + "R: " + r1 + "\nB: " + b1 + "\nG: "+ g1 + "\nColor: " + color1);
    // console.log('RGB value of background color\n' + "R: " + r2 + "\nB: " + b2 + "\nG: "+ g2 + "\nColor: " + color2);

    var a = color1.map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
        });
        let luminance1 =  a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        console.log("L1: " + luminance1);
    var a = color2.map(function (v) {
      v /= 255;

      // ... ? ... : ... - conditional operator
      // basically, if first argument (v<=0.03928) is true,
      // return value after ?.
      // if false, return value after : 
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
        });
        let luminance2 =  a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        console.log("L2: " + luminance2);
        
        var ratio = (Math.round((luminance2 + 0.05) / (luminance1 + 0.05)*100))/100
        
        // console.log("ratio:" + ratio);
        item.innerHTML = ratio;
        
        
      };


  function testFunc(item, index) {
  let compStyles = window.getComputedStyle(cell[index]);
  let color = [compStyles.getPropertyValue('color'), compStyles.getPropertyValue('background-color')];
  let luminArray = []
  
  color.forEach((item, index, array) => {
    // console.log("item: " + item + "\nIndex: " + index + "\nArray: "+ array)
    // Turn "color1(r,g,b)" into [r,g,b]
    let sep = item.indexOf(",") > -1 ? "," : " ";
    colorItem = item.substr(4).split(")")[0].split(sep);
   
    
    let r = (+colorItem[0]),
        g = (+colorItem[1]),
        b = (+colorItem[2]);
        
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

        colorItem = [r,g,b];
        
        var a = colorItem.map(function (v) {
          v /= 255;
          return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
        });
        let luminance =  a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        luminArray.push(luminance);
        
      
      })
      // console.log("luminance1: "+ luminArray[0])
      // console.log("luminance2: "+ luminArray[1])
      
      if  (luminArray[0] <= luminArray[1]) {
        luminArray = [luminArray[1], luminArray[0]]
      }
      
      var ratio = (Math.round((luminArray[0] + 0.05) / (luminArray[1] + 0.05)*100))/100;


            console.log("ratio:" + ratio);
            item.innerHTML = ratio;
};
  
        
        
        
        
      
      






// /**
//  * https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
//  * Converts an HSL color value to RGB. Conversion formula
//  * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
//  * Assumes h, s, and l are contained in the set [0, 1] and
//  * returns r, g, and b in the set [0, 255].
//  *
//  * @param   {number}  h       The hue
//  * @param   {number}  s       The saturation
//  * @param   {number}  l       The lightness
//  * @return  {Array}           The RGB representation
//  */
//  function hslToRgb(h, s, l){
//   var r, g, b;

//   if(s == 0){
//       r = g = b = l; // achromatic
//   }else{
//       var hue2rgb = function hue2rgb(p, q, t){
//           if(t < 0) t += 1;
//           if(t > 1) t -= 1;
//           if(t < 1/6) return p + (q - p) * 6 * t;
//           if(t < 1/2) return q;
//           if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
//           return p;
//       }

//       var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//       var p = 2 * l - q;
//       r = hue2rgb(p, q, h + 1/3);
//       g = hue2rgb(p, q, h);
//       b = hue2rgb(p, q, h - 1/3);
//   }

//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
// }