export const getSaved = async () => {
    const response = await fetch(`http://localhost:8000/saved-conversions`, {
      method: 'GET'
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }
  
export const postSaved = async (entry) => {
    const response = await fetch('http://localhost:8000/saved-conversions', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry)
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }

  export const deleteSaved = async (entryId) => {
    const response = await fetch(`http://localhost:8000/saved-conversions/${entryId}`, {
      method: 'DELETE'
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }