const CitiesTable = ({ arr }) => {
  return (
    <>
      <table>
        <thead>
          <th>name</th>
          <th>pepole</th>
          <th>streets</th>
          <th>isBeach</th>
          <th>psimbol</th>
        </thead>
        <tbody>
          {arr.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.pepole}</td>
                <td>{item.streets}</td>
                <td>{item.isBeach}</td>
                <td><img src={item.simbol} alt=""  width={40}/></td>


              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CitiesTable;
