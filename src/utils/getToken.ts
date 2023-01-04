interface AuthResponse {
  token: string;
  name: string;
  avatar: string;
  id: string;
  role: string;
  type: null;
  company_subdomain: string;
  acceptTermAndConditions: boolean;
  mobile_device_id: null;
}
export function getToken(): AuthResponse {
  const options = {
    method: 'POST',
    headers: {
      cookie:
        'adonis-session=a14c5ba391b687cbc271e19ac1249560ON0%252Bhyuw%252FfAuJ%252BBfCTCn%252F2ZlE888bG64Amh8kLC5hVV3iMVje%252BJyuXna5QJm1oRfRIzOpvbceh6h4ezlGyBHTxyGPxmnyRUxvi9DE1Mg4GnYkc0Y8%252ByDd7e3J%252FF46kUq; adonis-session-values=27004504d89b6e74f0f793b1bdacc59b%252FqZj7bl9WARnTwj3MPzP3oLrvA%252B85%252BaQ1NzhGGfSircw5Slr3I4pWeZMJzhaGKI9hnf1rjI3L6zIoUmxUEW%252FALJVknXYLAe7LhZTW0GolhW1jGNwnUbWbTBdnhrJ48qjyW7Ii3fJPWwaXHE8rwRYnhq7ocZKX7RIPxXhGsfbCR8%253D',
      'Content-Type': 'application/json',
    },
    body: '{"username":"lucas.becker@matrixcargo.com.br","password":"123456"}',
  };

  const data = fetch(
    'https://back-homologacao.matrixcargo.com.br/api/sessions',
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => err);

  return data as unknown as AuthResponse;
}
