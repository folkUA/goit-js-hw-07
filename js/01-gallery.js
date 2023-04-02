import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  const link = target.dataset.source;
  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${link}" alt="${target.alt}">
	`);
  instance.show();
  evt.currentTarget.addEventListener("keydown", (evt) =>
    evt.key === "Escape" ? instance.close() : false
  );
}
