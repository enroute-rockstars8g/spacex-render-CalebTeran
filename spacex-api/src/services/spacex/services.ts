export const getAllRockets = async () => {
    try {
      const response = await fetch(`https://api.spacex.land/rest/rockets`);

      if (response.status !== 200) return;
  
      const rockets = await response.json();
      console.log(rockets)
  
      return rockets;
    } catch (e) {
      console.error(e);
    }
  };