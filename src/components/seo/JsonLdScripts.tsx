import {
  jsonLdScript,
  organizationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from "@/lib/seo/schemas";

type JsonLdScriptsProps = {
  extra?: object[];
};

export function JsonLdScripts({ extra = [] }: JsonLdScriptsProps) {
  const schemas = [organizationSchema, professionalServiceSchema, webSiteSchema, ...extra];

  return <JsonLdList schemas={schemas} />;
}

export function JsonLdList({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
        />
      ))}
    </>
  );
}
