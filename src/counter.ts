import { fromEvent } from 'rxjs';

window.onload = () => {
  let count = 0;
  const button = document.getElementById('btn')!;
  const counter$ = fromEvent<MouseEvent>(button, 'mousedown');
  counter$.subscribe(() => {
    count++;
    button.textContent = count.toString();
  });
};
