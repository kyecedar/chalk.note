//import { invoke } from "@tauri-apps/api/tauri";
//import { appWindow } from "@tauri-apps/api/window";
//import { fs } from "@tauri-apps/api";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;



const init = async () => {
};

// const greet = async () => {
//   if (greetMsgEl && greetInputEl) {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     greetMsgEl.textContent = await invoke("greet", {
//       name: greetInputEl.value,
//     });
//   }
// };



init();



// window.addEventListener("DOMContentLoaded", async () => {
//   await appWindow.setAlwaysOnTop(true);

//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document
//     .querySelector("#greet-button")
//     ?.addEventListener("click", greet);
// });