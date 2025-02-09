import { ClassArray, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function mergeClasses(rawClassList: ClassArray) {
  const mergedClassList = clsx(rawClassList)

  return twMerge(mergedClassList)
}

function collectMergeableClasses(classCandidates: Array<string | null | undefined>): string[] {
  const classesToMerge = [];

  for (let i = 0; i < classCandidates.length; ++i) {
    const classCandidate = classCandidates[i];

    if (!classCandidate) {
      continue
    }

    classesToMerge
      .push(classCandidate)
  }

  return classesToMerge
}


export {
  mergeClasses,
  collectMergeableClasses,
}
