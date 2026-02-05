import * as blocks from "../blocks/";
import { Contact } from "../../../types/personalInfo.type";
import { WorkExperience } from "../../../types/experience.type";
import { EducationItem } from "../../../types/education.type";
import { Project } from "../../../types/project.type";
import { Skills } from "../../../types/skills.type";
import { Certification } from "../../../types/certif.type";
import { ExtraCurricularActivity } from "../../../types/extraCurr.type";
import { Hobbies } from "../../../types/hobbies.type";
import { Languages } from "../../../types/languages.type";
import { ResumeSection, SectionType, SectionTypeValue } from "types/resumeItem.type";

export class ResumeBuilder {
  private parts: string[] = [];

  private skipIfNull(...vals: any[]) {
    return vals.some(v => v == null || (Array.isArray(v) && v.length === 0));
  }

  private addListSection<T>(
    title: string,
    data: T[] | undefined,
    blockFn: (item: T) => string,
    stackSpacing = "1.5em"
  ) {
    if (this.skipIfNull(data)) return this;

    const isSingle = data!.length === 1;
    this.parts.push(
      blocks.sectionTitle(title),
      blocks.spacing(0.4),
      isSingle
        ? `#${blockFn(data![0])}`
        : `#stack(spacing: ${stackSpacing}, ${data!.map(blockFn).join(",\n")})`,
      blocks.spacing(isSingle ? 0.6 : 1)
    );
    return this;
  }

  setBase() {
    this.parts.push(blocks.Base());
    return this;
  }

  setHeader(name?: string, contacts?: Contact[]) {
    if (this.skipIfNull(name, contacts)) return this;
    this.parts.push(blocks.Header(name!, contacts!), blocks.spacing(1));
    return this;
  }

  addProfile(userSummary?: string) {
    if (this.skipIfNull(userSummary)) return this;
    this.parts.push(blocks.sectionTitle("Profile"), blocks.Profile(userSummary!));
    return this;
  }

  addExperience = (exp?: WorkExperience[]) =>
    this.addListSection("Experience", exp, blocks.ExperienceBlock, "1em");

  addEducations = (edu?: EducationItem[]) =>
    this.addListSection("Education", edu, blocks.EducationBlock);

  addProjects = (proj?: Project[]) =>
    this.addListSection("Projects", proj, blocks.ProjectBlock);

  addSkills(skills?: Skills) {
    if (this.skipIfNull(skills)) return this;
    this.parts.push(blocks.sectionTitle("Skills"), blocks.spacing(0.4), blocks.SkillsBlock(skills!), blocks.spacing(1));
    return this;
  }

  addLanguages(languages?: Languages) {
    if (this.skipIfNull(languages)) return this;
    this.parts.push(blocks.sectionTitle("Spoken Languages"), blocks.spacing(0.4), blocks.LanguagesBlock(languages!), blocks.spacing(0.6));
    return this;
  }

  addHobbies(hobbies?: Hobbies) {
    if (this.skipIfNull(hobbies)) return this;
    this.parts.push(blocks.sectionTitle("Hobbies"), blocks.spacing(0.4), blocks.HobbiesBlock(hobbies!), blocks.spacing(0.6));
    return this;
  }

  addCertifications(certs?: Certification[]) {
    return this.addOneLinerSection("Certifications", certs, blocks.CertificationBlock);
  }

  addExtracurriculars(extras?: ExtraCurricularActivity[]) {
    return this.addOneLinerSection("Extracurriculars", extras, blocks.ExtraCurrBlock);
  }

  private addOneLinerSection<T>(title: string, data: T[] | undefined, blockFn: (item: T) => string) {
    if (this.skipIfNull(data)) return this;
    const isSingle = data!.length === 1;
    this.parts.push(
      blocks.sectionTitle(title),
      blocks.spacing(0.4),
      `#one_liner((\n  ${data!.map(blockFn).join(",\n  ")}\n))`,
      blocks.spacing(isSingle ? 0.6 : 1)
    );
    return this;
  }

  addSection(section: ResumeSection) {
    const handlers: Record<SectionTypeValue, (body: any) => void> = {
      [SectionType.WorkExperience]: this.addExperience,
      [SectionType.Education]: this.addEducations,
      [SectionType.Project]: this.addProjects,
      [SectionType.Skills]: this.addSkills.bind(this),
      [SectionType.Certification]: this.addCertifications.bind(this),
      [SectionType.ExtraCurricular]: this.addExtracurriculars.bind(this),
      [SectionType.Hobbies]: this.addHobbies.bind(this),
      [SectionType.Languages]: this.addLanguages.bind(this),
    };

    handlers[section.type]?.(section.body);
    return this;
  }

  build(): string {
    return this.parts.join("\n");
  }
}
