"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

const components = {
  Image,
};

export const MDXRemoteClient = ({
  source,
  components,
}: {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  components: any;
}) => {
  return <MDXRemote {...source} components={components} />;
};
