import React from 'react';
import useDateCountDown from '../../hooks/useDateCountDown';
import CountItem from './CountItem';
import { styMargin } from './styles';

export default function CountContainer() {
    const {days, hours, minutes, seconds, timeHasRunOut, isEventOver} = useDateCountDown();
    const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

    if(timeHasRunOut){
        return (
            <>
                <div className='row'>
                    <div className='col-md-12' style={{fontSize: '20px'}}>
                        {`ACARA ${finalText} BERLANGSUNG`}
                    </div>
                </div>
            </>
        )
    };

  return (
    <div className='col-md-10 col-md-offset-1 text-center text-center' css={styMargin('0 0 16px 0')}>
      <h2 className="main-font main-font__wedding">Count Down Acara</h2>
      <CountItem text="Days" number={days}/>
      <CountItem text="Hours" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Seconds" number={seconds} />
    </div>
  );
}
