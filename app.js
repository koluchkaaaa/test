'use strict';
const config = window.PLAN_SVET_CONFIG || { rates: {} };
const names = { layout: 'Планировка', light: 'Свет', electric: 'Электрика' };
const descriptions = {
  layout: 'Мебель задаёт логику пространства: свободные проходы, отдельная спальня, кухня-гостиная и места для хранения.',
  light: 'Общий свет, освещение рабочей зоны и мягкий свет у дивана. Пунктиром показаны условные группы включения.',
  electric: 'Точки для техники, рабочего места и зарядки у кровати. Схематичное расположение связано с расстановкой мебели.'
};
function planSvg(id) {
  return `<svg class="plan-svg" viewBox="0 0 480 380" role="img" aria-labelledby="${id}-title"><title id="${id}-title">Иллюстративная планировка квартиры: спальня, кухня-гостиная, санузел и прихожая</title>
  <defs><pattern id="${id}-tile" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M15 0H0V15" fill="none" stroke="#dadccc" stroke-width=".7"/></pattern><pattern id="${id}-wood" width="45" height="14" patternUnits="userSpaceOnUse"><path d="M0 14H45M22 0V14" stroke="#dfdece" stroke-width=".5" fill="none"/></pattern><radialGradient id="${id}-glow"><stop stop-color="#e5c275" stop-opacity=".55"/><stop offset="1" stop-color="#e5c275" stop-opacity="0"/></radialGradient></defs>
  <g stroke="#6f7d69" stroke-width=".8"><path d="M56 42H424V326H56Z" fill="#f4f1e6"/><path d="M56 42H424V326H56Z" fill="url(#${id}-wood)"/><path d="M56 218H185V326H56Z" fill="url(#${id}-tile)"/><path d="M56 42H424V326H56Z" fill="none" stroke="#55654f" stroke-width="7"/><path d="M244 42V167M244 203V220H56M185 220V260M185 302V326" fill="none" stroke="#55654f" stroke-width="5"/>
  <g stroke="#f4f1e6" stroke-width="9"><path d="M94 42H190M424 83V182M424 235V293M56 85V160M221 326H266"/></g><g stroke="#809478" stroke-width="2"><path d="M94 42H190M94 38V46M190 38V46M424 83V182M420 83H428M420 182H428M424 235V293M56 85V160"/></g>
  <g fill="none" stroke="#9aa38b"><path d="M244 167a36 36 0 0 1 36 36h-36M185 260a42 42 0 0 1 42 42h-42M221 326v-44a44 44 0 0 1 44 44"/></g>
  <g class="furniture"><rect x="80" y="76" width="108" height="112" rx="2" fill="#e5e4d5"/><rect x="83" y="99" width="102" height="85" rx="2" fill="#f8f6eb"/><rect x="88" y="81" width="42" height="21" rx="4" fill="#f9f7ee"/><rect x="139" y="81" width="42" height="21" rx="4" fill="#f9f7ee"/><path d="M83 118H185M83 123H185" stroke="#c2c4af"/><rect x="64" y="179" width="160" height="25" fill="#d9ddcc"/><path d="M104 179V204M144 179V204M184 179V204"/>
  <path d="M264 50H413V77H290V133H264Z" fill="#dadcc9"/><rect x="318" y="53" width="35" height="19" rx="3" fill="#f5f2e7"/><circle cx="278" cy="98" r="6" fill="none"/><circle cx="278" cy="118" r="6" fill="none"/>
  <rect x="322" y="111" width="61" height="40" rx="18" fill="#e4dfca"/><g fill="#f1eee1"><rect x="332" y="99" width="17" height="9" rx="4"/><rect x="357" y="99" width="17" height="9" rx="4"/><rect x="332" y="154" width="17" height="9" rx="4"/><rect x="357" y="154" width="17" height="9" rx="4"/></g>
  <rect x="322" y="203" width="81" height="63" fill="#e8e5d8" stroke="none"/><rect x="286" y="224" width="31" height="77" rx="5" fill="#aeb99f"/><rect x="292" y="231" width="28" height="29" rx="4" fill="#c1c9b4"/><rect x="292" y="263" width="28" height="31" rx="4" fill="#c1c9b4"/><ellipse cx="350" cy="252" rx="18" ry="28" fill="#e8dfc6"/><rect x="401" y="220" width="11" height="68" fill="#d9d8c7"/>
  <rect x="66" y="233" width="43" height="75" rx="9" fill="#f9f8ef"/><rect x="73" y="240" width="28" height="60" rx="9" fill="#e5e9dc"/><ellipse cx="158" cy="250" rx="14" ry="18" fill="#faf9ef"/><rect x="140" y="285" width="33" height="29" fill="#e0e2d4"/><ellipse cx="156" cy="298" rx="11" ry="8" fill="#f6f5ec"/>
  <rect x="196" y="227" width="69" height="23" fill="#d9ddcc"/><path d="M230 227V250"/><circle cx="395" cy="185" r="12" fill="#a5b597" stroke="none"/><path d="M387 180l15 9m-13 3 10-16" stroke="#7e9472"/></g>
  <g fill="#8c9480" stroke="none" font-family="Arial" font-size="8" letter-spacing="1"><text x="115" y="64">СПАЛЬНЯ</text><text x="306" y="193">КУХНЯ-ГОСТИНАЯ</text><text x="72" y="319" font-size="6">САНУЗЕЛ</text><text x="211" y="275" font-size="6">ХОЛЛ</text></g>
  <g class="lights" stroke="#b39451"><g fill="url(#${id}-glow)" stroke="none"><circle cx="138" cy="131" r="65"/><circle cx="350" cy="132" r="50"/><circle cx="353" cy="254" r="65"/></g><g fill="#fcf4d3" stroke-width="1.4"><circle cx="138" cy="131" r="7"/><circle cx="350" cy="132" r="7"/><circle cx="353" cy="254" r="7"/><circle cx="230" cy="290" r="5"/><circle cx="129" cy="267" r="5"/><circle cx="298" cy="65" r="4"/><circle cx="384" cy="65" r="4"/></g><path d="M138 131L226 131V207M350 132L256 132V207M353 254L273 254V312M129 267L177 267" fill="none" stroke-dasharray="4 4"/><g fill="#b39451"><rect x="223" y="206" width="6" height="6"/><rect x="253" y="206" width="6" height="6"/></g></g>
  <g class="electrics" fill="#f7f3e8" stroke="#b77e59" stroke-width="1.5">${[[75,110],[199,110],[207,190],[279,84],[310,83],[389,83],[405,209],[405,301],[282,295],[205,239],[167,310]].map(([x,y])=>`<g transform="translate(${x} ${y})"><circle r="6"/><path d="M-2-2V2M2-2V2"/></g>`).join('')}</g>
  <g fill="none" stroke="#a8b09a" stroke-width=".6"><path d="M56 22H424M56 17V27M424 17V27M36 42V326M31 42H41M31 326H41"/></g><g fill="#8c9480" stroke="none" font-family="Arial" font-size="7"><text x="226" y="18">8 400</text><text x="20" y="195" transform="rotate(-90 20 195)">6 400</text></g></g></svg>`;
}
const heroPlan = document.querySelector('#hero-plan');
const projectPlan = document.querySelector('#project-plan');
heroPlan.innerHTML = planSvg('hero');
projectPlan.innerHTML = planSvg('project');
projectPlan.setAttribute('role', 'tabpanel');
const tabs = [...document.querySelectorAll('[data-layer]')];
function selectLayer(layer) {
  projectPlan.className = `layer-${layer}`;
  projectPlan.setAttribute('aria-labelledby', `tab-${layer}`);
  document.querySelector('#layer-description').textContent = descriptions[layer];
  document.querySelector('#drawing-layer').textContent = { layout: 'ПЛАН МЕБЕЛИ', light: 'СХЕМА СВЕТА', electric: 'ЭЛЕКТРИЧЕСКИЕ ТОЧКИ' }[layer];
  tabs.forEach(tab => { const active = tab.dataset.layer === layer; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectLayer(tab.dataset.layer));
  tab.addEventListener('keydown', e => {
    let next;
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { e.preventDefault(); tabs[next].focus(); selectLayer(tabs[next].dataset.layer); }
  });
});
selectLayer('layout');
const form = document.querySelector('#brief-form');
const area = document.querySelector('#area');
const range = document.querySelector('#area-range');
const checkboxes = [...form.querySelectorAll('[name="service"]')];
const selectedServices = () => checkboxes.filter(c => c.checked).map(c => c.value);
const validRate = name => typeof config.rates?.[name] === 'number' && Number.isFinite(config.rates[name]) && config.rates[name] > 0;
const formatMoney = n => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(n);
function estimate() {
  const selected = selectedServices();
  if (!area.validity.valid) return 'Укажите площадь';
  if (!selected.length) return 'Выберите услуги';
  if (!selected.every(validRate)) return 'По запросу';
  return formatMoney(selected.reduce((sum, s) => sum + config.rates[s], 0) * Number(area.value));
}
function updateEstimate() {
  const selected = selectedServices();
  checkboxes[0].setCustomValidity(selected.length ? '' : 'Выберите хотя бы одну услугу');
  document.querySelector('#estimate-value').textContent = estimate();
  const priced = selected.length && selected.every(validRate);
  document.querySelector('#estimate-label').textContent = priced ? 'Предварительная стоимость' : 'Стоимость проекта';
  document.querySelector('#price-note').textContent = priced ? 'Ориентировочный расчёт. Итоговую стоимость согласуем после обсуждения задачи.' : 'Стоимость уточняется после обсуждения задачи и исходного плана.';
}
area.addEventListener('input', () => { if (area.validity.valid) range.value = area.value; updateEstimate(); });
range.addEventListener('input', () => { area.value = range.value; updateEstimate(); });
checkboxes.forEach(c => c.addEventListener('change', updateEstimate));
document.querySelectorAll('[data-select]').forEach(a => a.addEventListener('click', () => { checkboxes.forEach(c => { c.checked = c.value === a.dataset.select; }); updateEstimate(); }));
const dialog = document.querySelector('#brief-dialog');
const wishes = document.querySelector('#wishes');
function briefText() {
  return `Здравствуйте! Хочу обсудить проект с «План и свет».\n\nПлощадь: ${area.value} м²\nУслуги: ${selectedServices().map(s => names[s]).join(', ')}\nПредварительная стоимость: ${estimate()}${wishes.value.trim() ? `\n\nМои пожелания:\n${wishes.value.trim()}` : ''}`;
}
const username = typeof config.telegramUsername === 'string' ? config.telegramUsername.replace(/^@/, '').trim() : '';
const hasContact = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(username);
function updateBrief() {
  document.querySelector('#brief-preview').textContent = briefText();
  document.querySelector('#copy-status').textContent = '';
  if (hasContact) document.querySelector('#contact-link').href = `https://t.me/${username}?text=${encodeURIComponent(briefText())}`;
}
form.addEventListener('submit', event => { event.preventDefault(); if (!form.reportValidity()) return; updateBrief(); dialog.showModal(); });
wishes.addEventListener('input', updateBrief);
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelector('#contact-link').hidden = !hasContact;
document.querySelector('#contact-note').hidden = hasContact;
document.querySelector('#copy-brief').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(briefText()); document.querySelector('#copy-status').textContent = 'Описание скопировано. Можно отправить его в сообщении.'; }
  catch { document.querySelector('#copy-status').textContent = 'Не удалось скопировать автоматически. Выделите текст выше или скачайте файл.'; }
});
document.querySelector('#download-brief').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob(['\ufeff' + briefText()], { type: 'text/plain;charset=utf-8' }));
  const a = document.createElement('a'); a.href = url; a.download = 'plan-i-svet-zayavka.txt'; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
updateEstimate();
