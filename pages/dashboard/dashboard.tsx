import React, { useState } from 'react';
import { Button } from 'antd';
/** React Hooks组件 */

const HomeComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button type="primary" onClick={() => setCounter(counter+1)}>
        click
      </Button>
      {counter}
    </div>
  );
};

export default HomeComponent;
