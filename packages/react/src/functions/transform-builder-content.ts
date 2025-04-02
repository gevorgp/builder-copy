/**
 * Transforms Builder.io content using a custom transformation function.
 *
 * @param {Object} content - The raw Builder.io content.
 * @param {Function} transformFn - The function to apply transformations.
 * @returns {Object} - The transformed content.
 * @throws {Error} - If invalid parameters are provided.
 *
 * @example
 * const transformedContent = transformBuilderContent(builderContent, (content) => {
 *   return {
 *     ...content,
 *     data: {
 *       ...content.data,
 *       blocks: content.data.blocks.filter((block) => !block.hidden),
 *     },
 *   };
 * });
 */
export function transformBuilderContent(content, transformFn) {
  if (!content || typeof content !== "object") {
    throw new Error("Invalid content provided");
  }
  if (typeof transformFn !== "function") {
    throw new Error("A valid transformation function is required");
  }

  return transformFn(content);
}
