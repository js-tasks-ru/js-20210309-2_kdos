export default class ColumnChart {
  chartHeight = 50;

  constructor({
    data = [],
    label = 'orders',
    value = 344,
    link = '#'} = {}) {

    this.label = label;
    this.value = value;
    this.link = link;
    this.data = data;

    this.render();
  }

  update(data = []) {
    this.data = data;
    this.render();
  }

  render() {
    const element = document.createElement('div'); // (*)

    const maxVal = Math.max(...this.data);
    const scale = this.chartHeight / maxVal;

    element.innerHTML = `
    <div class="column-chart ${this.data.length ? '' : 'column-chart_loading'}"
         style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        Total ${this.label}
        <a href="/${this.link}" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
            ${this.data
              .map(v => `<div style="--value: ${Math.floor(v * scale)}"
                              data-tooltip="${(v / maxVal * 100).toFixed(0)}%">
                         </div>`)
              .join('')}
        </div>
      </div>
    </div>
    `;

    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
