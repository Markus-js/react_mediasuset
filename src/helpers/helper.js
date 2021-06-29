export async function fetch2api(url, method = 'GET') {
    let option = {
        method: method,
    }

    try {
        const response = await fetch(url, option);
        const result = await response.json();
        return result;
    }

    catch(error){
        console.error(error);
    }
}

export function switchColor(color) {
    // Set Background Color 
          // Value to set CSS style in JSX
          let SCENE_THEME; // === to red, blue, green or purple
          const backgroundColor = color.toLowerCase(); // = rød scene
          // Declare possiblilities 
          const red = "#E9485B";
          const blue = "#4A6FBF";
          const green = "#54A047";
          const purple = "#A12E8F";
          // def = default- white
          const def = "#fff";
          
          switch (backgroundColor) {
            case "rød scene":
              SCENE_THEME = red;
              break;
            case "blå scene":
              SCENE_THEME = blue;
              break;
            case "grøn scene":
              SCENE_THEME = green;
              break;
            case "lilla scene":
              SCENE_THEME = purple;
              break;
            default:
              SCENE_THEME = def;
              break;
          }
}