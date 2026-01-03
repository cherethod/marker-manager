import { IconFiles, IconSearch, IconGitBranch , IconBlocks } from "@tabler/icons-react";
import { Section } from "./LeftMenu/Section";

export function AsideMenu({ activeSection, handleSectionClick }) {

    return (
    <aside>
      <Section
        sectionName="explorer"
        activeSection={activeSection}
        callback={handleSectionClick}
      >
        <IconFiles stroke={1.75} />
      </Section>
      <Section
        sectionName="search"
        activeSection={activeSection}
        callback={handleSectionClick}
      >
        <IconSearch stroke={1.75} />
      </Section>
      <Section
        sectionName="git"
        activeSection={activeSection}
        callback={handleSectionClick}
      >
        <IconGitBranch stroke={1.75} />
      </Section>
      <Section
        sectionName="blocks"
        activeSection={activeSection}
        callback={handleSectionClick}
      >
        <IconBlocks stroke={1.75} />
      </Section>
      <div>5</div>
    </aside>
  );
}
