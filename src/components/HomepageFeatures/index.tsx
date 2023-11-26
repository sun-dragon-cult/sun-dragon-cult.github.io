import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "RuneQuest Glorantha Foundry System",
    Svg: require("@site/static/img/fire_sky.svg").default,
    description: (
      <>
        A beta version of a system for <Link to="https://foundryvtt.com/">Foundry VTT</Link> that
        supports Chaosiums <Link to="https://www.chaosium.com/runequest-rpg/">RuneQuest RPG</Link>.
        Is now/soon released on Foundrys servers.
      </>
    ),
  },
  {
    title: "Runequest Wiki Foundry module",
    Svg: require("@site/static/img/beast.svg").default,
    description: (
      <>
        Most content from <Link to="https://rqwiki.chaosium.com/">Chaosium's RQG wiki</Link> is
        included in a <Link>Foundry module</Link>. To begin with only an English language version is
        provided but hopefully more languages will follow.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.centeredRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
