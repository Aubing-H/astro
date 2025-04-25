import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 很高兴认识你!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        打个招呼吧~
      </button>
    </div>
  );
}