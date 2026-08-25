---
title: "Наблюдаемость и резервные копии"
description: "Кто собирает метрики и журналы, где их смотреть и чем резервная копия отличается от отказоустойчивости."
lesson: 6
layout: "cert-lesson"
language: "ru"
url: "/certification/materials/observability/"
---

Две темы в одном уроке, потому что обе про одно: что делать, когда что-то пошло не так, —
и что вы успели подготовить заранее.

## Метрики и журналы

Стек здесь не тот, который ожидают по привычке, и это любимая ловушка экзамена.

| Что собирают | Чем |
|---|---|
| Метрики | **VictoriaMetrics** |
| Журналы | **VictoriaLogs** |
| Графики | **Grafana** |
| Оповещения | **Alerta** |

Ни Prometheus, ни Loki, ни Elasticsearch в платформе нет. VictoriaMetrics при этом понимает
язык запросов PromQL — то есть привычные запросы работают, а хранилище другое: компактнее и
дешевле на больших объёмах.

Собирает метрики агент **vmagent**, который живёт рядом с нагрузкой и отправляет собранное в
хранилище.

<figure>
<svg viewBox="0 0 620 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Путь метрики от пода до графика">
  <rect x="15" y="60" width="120" height="50" rx="7" fill="#f1f5f9" stroke="#64748b"/>
  <text x="75" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Ваши поды</text>
  <text x="75" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">отдают метрики</text>
  <path d="M140 85 L178 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="183" y="60" width="120" height="50" rx="7" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="243" y="82" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#312e81">vmagent</text>
  <text x="243" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3730a3">собирает и шлёт</text>
  <path d="M308 85 L346 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="351" y="60" width="130" height="50" rx="7" fill="#dbeafe" stroke="#2563eb"/>
  <text x="416" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a">VictoriaMetrics</text>
  <text x="416" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e40af">хранит</text>
  <path d="M486 85 L524 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="529" y="60" width="80" height="50" rx="7" fill="#dcfce7" stroke="#16a34a"/>
  <text x="569" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d">Grafana</text>
  <text x="569" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">рисует</text>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 0 L8 4 L0 8 z" fill="#64748b"/></marker></defs>
</svg>
<figcaption>Тот же путь у журналов, только вместо vmagent — fluent-bit, а вместо VictoriaMetrics — VictoriaLogs.</figcaption>
</figure>

Про наследование помните из второго урока: тенант без своего мониторинга шлёт метрики
родительскому. А вот включать сбор **задним числом бесполезно** — записей за прошлое взять
неоткуда, и это стоит решать при создании кластера, а не когда график понадобился.

## Резервные копии

Здесь два разных механизма, и путать их — верный способ ошибиться в вопросе.

**Копии управляемых сервисов.** Заказывая базу, вы включаете резервное копирование прямо в
её настройках. Дальше платформа снимает копии по расписанию и складывает их в объектное
хранилище. Отвечают за это три вещи: **BackupClass** описывает, куда и как складывать,
**расписание** — когда, а **BackupJob** — конкретный запуск.

**Velero.** Уровнем выше: копирует объекты самого кластера и тома. Это про восстановление
платформы, а не отдельной базы.

## Где проходит граница

Самое ценное в этой теме — понимать, чего резервные копии **не** делают.

Копии — не отказоустойчивость. Реплики спасают от падения узла, копии — от удалённых
данных. Это разные беды, и одно другое не заменяет.

Копия, которую ни разу не разворачивали, — не копия, а надежда. Восстановление надо
пробовать, пока оно не понадобилось.

И главное: копия хранится в объектном хранилище. Если оно живёт в том же кластере, что и
данные, то от потери кластера целиком она не спасёт. Для настоящей защиты хранилище должно
быть снаружи.

<div class="exam-box">
<h4>Что спросят на экзамене</h4>
<ul>
<li>Что метрики хранит VictoriaMetrics, а журналы — VictoriaLogs. Не Prometheus и не Loki.</li>
<li>Что VictoriaMetrics совместима с PromQL.</li>
<li>Что метрики собирает vmagent.</li>
<li>Что сбор метрик нельзя включить задним числом.</li>
<li>Три составляющие резервного копирования сервисов: BackupClass, расписание, BackupJob.</li>
<li>Что Velero работает на уровне платформы, а не отдельного сервиса.</li>
<li>Что реплики и резервные копии решают разные задачи.</li>
</ul>
</div>

<p class="doclink">Подробнее:
<a href="https://cozystack.io/docs/v1.6/operations/services/monitoring/" target="_blank" rel="noopener">мониторинг</a> ·
<a href="https://cozystack.io/docs/v1.6/operations/services/" target="_blank" rel="noopener">сервисы кластера</a></p>
