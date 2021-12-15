import React from 'react';

import './../style.css';

const tabs = [
  {
    id: 1,
    title: 'Сколько всего мест в доме?',
    description:
      'Многоквартирные дома могут иметь самое разное количество этажей. В зависимости от соотношения высоты и длины здания многоквартирные дома делятся на протяженные и точечные. Точечные или башенные дома имеют большую высоту, чем длину. Как правило, они имеют только один подъезд.',
  },
  {
    id: 2,
    title: 'Самая дорогая квартира?',
    description:
      'Самые дорогие апартаменты в центре города по нынешнему курсу обойдутся потенциальному покупателю в 70 миллионов гривен. За эти деньги можно жить в шелках, которые натянули прямо на стену, и в окружении золоченых вензелей. Любителям скромной роскоши можно присмотреться к пентхаусу на площади Свободы или вовсе сделать ремонт с ноля в трехуровневой квартире на проспекте Науки.',
  },
  {
    id: 3,
    title: 'Могу ли я отменить бронирование?',
    description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
  },
  {
    id: 4,
    title: 'Можно ли купить квартиру?',
    description:
      'Для того чтобы до конца понять, следует ли покупать ту или иную квартиру, мы составили контрольный лист того, что необходимо сделать перед покупкой недвижимости, в зависимости от того, на рынке первичного или вторичного жилья Вы собираетесь приобрести квартиру.',
  },
];

export default function Faq() {
  const [activeId, setActiveId] = React.useState(null);
  const [visibleDescription, setVisibleDescription] = React.useState(false);

  function onClickItem(e) {
    setActiveId(Number(e.target.id.slice(4)));
    setVisibleDescription(!visibleDescription);
  }

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabs.map((obj, index) => (
            <div
              className={activeId === obj.id && visibleDescription ? 'tab active' : 'tab'}
              id={obj.id}
              key={`${obj.id}_${index}`}>
              <input onClick={onClickItem} id={`tab-${obj.id}`} type="checkbox" name="tabs" />
              <label htmlFor={`tab-${obj.id}`}>{obj.title}</label>
              <div className="tab-content">
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
