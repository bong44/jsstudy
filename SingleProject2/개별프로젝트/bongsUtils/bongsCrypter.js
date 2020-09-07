function bong_encrypter(p_str) {
    var cr = new JSEncrypt();
    var v_pubKey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLZL7JkIAxVOLqtEZr+SjJZYqS59ARp3/Z/l5Q6AOWryyrCJI4A/4RjFiZ2lN2a08WGgZuYrM+rk7mXmxQdAX1aUTXk9xxZX2YrO9g2TMxpJzrdDD6AKbDSqz9TLx2mBuLFKr+dJXX4FSg6GQF9ZAlP/PxuriRMQ5kbnqGPiMCvwIDAQAB-----END PUBLIC KEY-----";
    cr.setPrivateKey(v_pubKey);
    var encryptedText = cr.encrypt(p_str);
    return encryptedText;
  }
  
  function bong_decrypter(p_str) {
    var dcr = new JSEncrypt();
    var v_priKey = "-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQDLZL7JkIAxVOLqtEZr+SjJZYqS59ARp3/Z/l5Q6AOWryyrCJI4A/4RjFiZ2lN2a08WGgZuYrM+rk7mXmxQdAX1aUTXk9xxZX2YrO9g2TMxpJzrdDD6AKbDSqz9TLx2mBuLFKr+dJXX4FSg6GQF9ZAlP/PxuriRMQ5kbnqGPiMCvwIDAQABAoGAMlaw0XouAAeeUbBkbXyxF4dGEK3G1Ve7UNyfwy5pFPYt+/aXGb4DN5ygoRNj7L8KR9IRHWjYK/9AD8v2ysKsZmuXNt23ojkKHq5wirSCpO2vb244ApMQAlvZYdoAeUaYjMyq9RLBsPXh8yLAMrLGU6Yxsv5evRjrHnStW8LcImECQQDwnypVThxZP5d5vxDHV4xFvS0PFucR05TIEtpLvGIGQ8bzol9jz+A4irpIRHnyRfydyJQziS7Svp9EsSlWiOaVAkEA2GR8XZPTXTwtotF4dSSqu0sdERUCyShTAK4/vRjGviH0qITGPk+ZeCQp2ZV0WsY84/6mMRviiBn92+J7hS5TAwJAASRQOB1pxwalOl+svbVtpfsS1qp+KDh/0T89p/RZ5ru1mvxfRYL8BmiqH6OrjHnGjB0ijugMv9VFvja1AoMdzQJBALjo1SUZpunq/Iw/NxHS7Vnyi7oHHERMgvD39VtfCqV6WpiOLOEeH+R78o8NmUngUDP7bIRWcbMfksAMvsRFm4UCQQC3suGb43vEPOv8dGaIX7DxRCuvbgI+3mRn07bZe//iaxiQXphcMJArJB4bpxl+Sdq59miHPhHpTIYGN9fVHYr+-----END RSA PRIVATE KEY-----";
    dcr.setPrivateKey(v_priKey);
    var decryptedText = dcr.decrypt(p_str);
    return decryptedText;
  }