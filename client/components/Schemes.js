import React from 'react';
import { useState, useEffect } from 'react';

function Schemes() {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [schemes, setSchemes] = useState([]);

  const get_schemes = async () => {
    const query = JSON.stringify({
      query: `query MyQuery {
  scheme {
    description
    eligibility
    id
    name
    type
    admin {
      name
    }
  }
}
`,
    });

    const response = await fetch(
      'https://reachout-sih.herokuapp.com/v1/graphql',
      {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
        method: 'POST',
        body: query,
      },
    );

    const responseJson = await response.json();
    console.log(responseJson);
    setSchemes(responseJson.data.scheme);
    setIsLoading(false);
  };

  useEffect(() => {
    //Fetch the schemes from the database and set the state variable.
    get_schemes();
  }, []);

  if (isLoading) {
    return <h1 className="text-3xl text-center p-3">Loading...</h1>;
  }

  return (
    <div>
      {/* <h1 className="text-3xl text-center p-3">Scheme provided by government</h1> */}
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Scheme Name
              </th>
              <th scope="col" className="py-3 px-6">
                Ministry
              </th>
              <th scope="col" className="py-3 px-6">
                Scheme Type
              </th>
              <th scope="col" className="py-3 px-6">
                Eligibility Criteria
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Apply</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={scheme.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {scheme.name}
                  </th>
                  <td className="py-4 px-6">{scheme.admin.name}</td>
                  <td className="py-4 px-6">{scheme.type}</td>
                  <td className="py-4 px-6">{scheme.eligibility}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                      data-modal-toggle="popup-modal"
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schemes;
