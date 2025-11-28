import admin from "firebase-admin";
const serviceAccount = {
  type: "service_account",
  project_id: "x-clone-a832d",
  private_key_id: "297a7d1ec4cbcb9a3a393d80a71ba9a0580df615",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDJMh0TbeJ0gZZ2\nw8B6Tl1mubpMPaeQ5N2YhV1pMguAjFvtlkQ7so3FtifwJk6zo6aZZOyza5zQSEEn\nwa0QbH01RHVPSP396UuuXIWfr14ZV9BxManOgQipjkTCqyDQ0W5MBxwsSSWMT+yX\nkjITwL1er2v+VaRl+OC2XFqsoumLHQcHPB2xykqE+oi9UetF5YCMI7XcgSmasY50\n8nkLElcrOwVA1zVhAGaCaBaPhwuUJN/8SjXS2+wio0GnLrwbhaVf0bXo6X2TeT/k\nfKyutmyKkQ9Bh5ndXbyyQAdCDEWSDmTUjkVbRBctkna6YiKplY9P23+yLVs1Ngeg\nPw5DMnmVAgMBAAECggEAWszUFHWuEth9GGJl1ozRWFAPxOK6Ygj3/SKLMrOUP1KZ\nFlOPvcVqeEUqJxaSxD3iLS5AKQUzA0joptGgkl3z7/tSWhLeFh6YujslTxjtBdD8\n0GkScpEHYMZFP/nNWJB8D7HRxCbK3FUhuJIRKZr9m+LdgS4TgLXebE6n2Wu4rMAC\nJocC8FV06/g5KnryzERIq97dH8UiJh7K7iRg+GwmVQaPcpBjdFMx5GXgWQHATrfH\nA1lAZF5tcJgdxLicQE23YP24AdE9kFwguhvOn+NqIhkHdEDoFb9iiRDhqPK7WZDL\naLrAOWp4NCztVy+6IkoKZ5Vpxy/yZymnWXyIGZmBTQKBgQD5yJZlygufXq+KC6hu\nfskI0rS1pMsOF0HZaQKpi7T0Y1gMtvxz27ksU/LWBoPz0qXMPaQKxFEPgkbNTjWF\niEr9yOti1RORqK9moWOlr2QKkjUb8Y4eqTJKnuCx4e/29M5zHWuclE2s0InRgMy2\nQOpF/iwqcDjp0+QA8xnQsD6jLwKBgQDOM/cXmJi9DcnP8LK6nCL1sX3y38vnBDG3\njHC/qO99np5j5g/HUnudyoH8gUX4W9aaQ/T11pQONEbUiT/4mncdfKE6iyOgTqgn\nDfdpg/TYCJ8IkUskTFTZuEnNIfYrPu5QykVikm+M/OxhktQjNdE3huHlBKjtpPhn\nZiEQRUqOewKBgQDwW60d1gbJHPweAonZifc5nkh2YlVjAc5Dv2DodZ9zbAVWdt8H\nPfA6T63lde+TuKgCmW45TiASpHItLY0jKbu/6o9XU2K5T3E5eSPCU7wY0Ah7Ez6H\nEplqZOgjRB79rSTccPsUeUElgqacCyzyVBUbtTIaxFJ/733/y+6TeoVL0QKBgQCo\nTUvJa5iG/iERYuFOZLA4HzWwra9skETQDoXcOVO4EWYwHZAVXSJeaPJtmUn162ee\npAblPM29Rjfls1yOWe0NGTMzaGucpXaj4cdlzPlj9q1vPb+6Eb9TsRIzpxuYspWr\nRV0alnEL/0gkX8ZcMsnf62ynE4WZ6gOByZ8E+7ldzwKBgQCa7u9Ukn0zWkvVOMiA\nPSmqEpmB371E4D8xP3WH0VdTBKM1EmVCFl8eUd4Rw0CYMHfcxmITbmJg+hAj8jOB\neYe+rk+ma5tTm3MXVdHcPcD1FxrofmaU9cpk9opLpIv8AB2Ez1oadEsh5DoCGBC7\ncmiLgvO7qZm7ivwu9QIcFfetZw==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@x-clone-a832d.iam.gserviceaccount.com",
  client_id: "109612183056731252654",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40x-clone-a832d.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { app, db };
