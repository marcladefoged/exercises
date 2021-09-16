"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  document.querySelector("#color").addEventListener("input", displayCursorColor);
  /* document.querySelector("#color").addEventListener("change", displayCursorColor); */

  //gets hex code from colorpicker
  function getCursorColor() {
    let colorInput = document.querySelector("#color");
    colorInput = colorInput.value;
    console.log(colorInput);
    return colorInput;
  }

  //display color from the color picker
  function displayCursorColor() {
    let color = getCursorColor();
    let displayColor = document.querySelector(".selected_color");
    displayColor.style.backgroundColor = color;
    console.log(color);
    displayHEX(color);
    displayRGB(color);
    displayHSL(color);
  }

  function hexToRGB(hex) {
    if (hex.length == 4) {
      r = `0x${hex[1]}${hex[1]}`;
      g = `0x${hex[2]}${hex[2]}`;
      b = `0x${hex[3]}${hex[3]}`;
    } else if (hex.length == 7) {
      r = `0x${hex[1]}${hex[2]}`;
      g = `0x${hex[3]}${hex[4]}`;
      b = `0x${hex[5]}${hex[6]}`;
    }

    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);

    let rgb = { r: r, g: g, b: b };
    /* console.log(rgb); */
    return rgb;
  }

  function displayRGB(color) {
    let rgbColor = hexToRGB(color);
    console.log("rgb color from hex ");
    rgbColor = `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;
    console.log(rgbColor);
    let rgbDiv = document.querySelector(".color_rgb p");
    rgbDiv.innerHTML = `RGB: ${rgbColor}`;
  }

  let r, g, b;
  function rgbToHsl(color) {
    /* let rgbColor = hexToRGB(color); */

    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
      h = 0;
    } else if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
      h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

    /*  return `${Math.round(h * 10) / 10}, ${Math.round(s * 10) / 10}%, ${Math.round(l * 10) / 10}%`; */
    /*   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing */
    return { h, s, l };
  }

  function displayHSL(color) {
    let hslColor = rgbToHsl(color);
    let h = Math.round(hslColor.h * 10) / 10;
    let s = Math.round(hslColor.s * 10) / 10;
    let l = Math.round(hslColor.l * 10) / 10;
    hslColor = `HSL: ${h}, ${s}%, ${l}%`;
    let hslDiv = document.querySelector(".color_hsl p");
    hslDiv.innerHTML = hslColor;
    console.log(hslColor);
  }

  function displayHEX(color) {
    console.log("this is some color " + color);
    let hexDiv = document.querySelector(".color_hex p");
    hexDiv.innerHTML = `HEX: ${color}`;
  }
});
