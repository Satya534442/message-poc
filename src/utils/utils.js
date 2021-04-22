export const formatMessageDataForNav = (data) => {
  const formattedData = {};
  data.forEach(item => {
    if(formattedData[item.number]) {
      const tempData = formattedData[item.number];
      tempData.push({
        text: item.text,
        id: item.id,
        type: item.type,
        date: item.date,
      });
      formattedData[item.number] = tempData;
    } else {
      const tempData = [];
      tempData.push({
        text: item.text,
        id: item.id,
        type: item.type,
        date: item.date,
      });
      formattedData[item.number] = tempData;
    }
  });

  return formattedData;

}