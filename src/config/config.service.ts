interface DBSecrets {
  password: string;
  username: string;
  port: number;
  host: string;
  engine?: string;
  dbClusterIdentifier?: string;
  ssl?: string;
}

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor() {}

  public async getMongoConfig() {
    const secrets = this.parseDBSecrets();
    return {
      uri: `mongodb://${secrets.username}:${secrets.password}@${secrets.host}:${secrets.port}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }

  private parseDBSecrets(): DBSecrets {
    const { DB_SECRET } = process.env;
    return JSON.parse(DB_SECRET);
  }
}
