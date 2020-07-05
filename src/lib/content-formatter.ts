export namespace IContentFormatter {
  export interface ContentFormatter {
    beforeContent: string;
    afterContent: string;
    emptyContent: string;
    beforeBlock: string;
    afterBlock: string;
    beforeGroup: string;
    afterGroup: string;
    /**
     * Formats serialized content of ContentBlock.
     */
    formatContent: (block: string) => string | Promise<string>;

    /**
     * Formats serialized content of ContentBlock including any additional
     * formatting applied by ContentGroup.
     *
     * Used when joining multiple ContentBlocks of ContentGroup.
     */
    formatBlock: (block: string) => string | Promise<string>;

    /**
     * Formats serialized content of ContentGroup.
     */
    formatGroup: (content: string) => string | Promise<string>;
  }

  export interface CtorOptions {
    beforeContent?: string;
    afterContent?: string;
    emptyContent?: string;
    beforeBlock?: string;
    afterBlock?: string;
    beforeGroup?: string;
    afterGroup?: string;
  }
}
/**
 * Class that formats and prepares for writing parts of (or whole) ContentGroup
 */
export class ContentFormatter implements IContentFormatter.ContentFormatter {
  beforeContent = '\n';
  afterContent = '\n';
  emptyContent = '\n';
  beforeBlock = '\n';
  afterBlock = '\n';
  beforeGroup = '';
  afterGroup = '\n';

  constructor(options: IContentFormatter.CtorOptions = {}) {
    this.beforeContent = options.beforeContent ?? '\n';
    this.afterContent = options.afterContent ?? '\n';
    this.emptyContent = options.emptyContent ?? '\n';
    this.beforeBlock = options.beforeBlock ?? '\n';
    this.afterBlock = options.afterBlock ?? '\n';
    this.beforeGroup = options.beforeGroup ?? '';
    this.afterGroup = options.afterGroup ?? '\n';
  }

  formatContent(block: string) {
    return `${this.beforeContent}${block}${this.afterContent}`;
  }

  formatBlock(block: string) {
    return `${this.beforeBlock}${block}${this.afterBlock}`;
  }

  formatGroup(content: string) {
    return `${this.beforeGroup}${content}${this.afterGroup}`;
  }
}
