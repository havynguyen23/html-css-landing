export const getElementById = (id) => document.getElementById(id);

export const classList = {
  add: (element, className) => element.classList.add(className),
  remove: (element, className) => element.classList.remove(className),
  contains: (element, className) => element.classList.contains(className),
};
