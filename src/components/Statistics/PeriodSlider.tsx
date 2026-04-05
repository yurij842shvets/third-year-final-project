import {months} from '../../data';

interface Props {
  selectedPeriod: string;
  setSelectedPeriod: (value: string) => void
}

export default function PeriodSlider({selectedPeriod, setSelectedPeriod}: Props) {

  const currentMonth = months.findIndex((month) => month.value === selectedPeriod)

  function previousMonth() {
    if(currentMonth === 0) return
    const newMonth = currentMonth - 1
    setSelectedPeriod(months[newMonth].value)
  }

  function nextMonth() {
    if(currentMonth === months.length - 1) return
    const newMonth = currentMonth + 1
    setSelectedPeriod(months[newMonth].value)
  }

  return (
    <>
      <div className="flex">
        <div className="arrow-container">
          <div className="arrow upper-right" onClick={previousMonth}></div>
          <div className="arrow lower-right" onClick={previousMonth}></div>
        </div>
        <div>
          <p className="current-slider-category">{months[currentMonth].label}</p>
        </div>
        <div className="arrow-container">
          <div className="arrow upper-left" onClick={nextMonth}></div>
          <div className="arrow lower-left" onClick={nextMonth}></div>
        </div>
      </div>
    </>
  );
}