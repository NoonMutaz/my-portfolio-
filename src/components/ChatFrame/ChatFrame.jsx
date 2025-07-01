import { useEffect } from 'react';

const ChatFrame = () => {
  useEffect(() => {
    // Prevent duplicate script loading
    if (document.getElementById('chatbase-script')) return;

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.id = 'chatbase-script';

    // REQUIRED: Set your bot ID
    script.dataset.id = 'tcmb8kUWk8HWZ4IsfwsUj'; // <-- YOUR actual bot ID
    script.dataset.chatbaseDomain = 'www.chatbase.co';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Nothing visible here
};

export default ChatFrame;
