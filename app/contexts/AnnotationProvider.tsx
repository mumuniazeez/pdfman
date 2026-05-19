import { createContext, useContext, useState } from "react";

type AnnotationType = "text" | "signature";

interface Annotation {
  id: string;
  type: AnnotationType;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  imageSrc?: string;
}

interface AnnotationProvider {
  annotations: Annotation[];
  addAnnotation: (annotation: Omit<Annotation, "id">) => void;
  updateAnnotation: (id: string, annotation: Omit<Annotation, "id">) => void;
  deleteAnnotation: (id: string) => void;
}

const AnnotationContext = createContext<AnnotationProvider | undefined>(
  undefined,
);

export const useAnnotationContext = () => {
  const context = useContext(AnnotationContext);
  if (!context)
    throw new Error("useAnnotationContext not in AnnotationProvider");

  return context;
};

export default function AnnotationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [annotations, setAnnotations] = useState<
    AnnotationProvider["annotations"]
  >([]);

  const addAnnotation: AnnotationProvider["addAnnotation"] = (annotation) => {
    setAnnotations((prev) => [
      ...prev,
      { id: Math.random().toString(), ...annotation },
    ]);
  };

  const updateAnnotation: AnnotationProvider["updateAnnotation"] = (
    id,
    annotation,
  ) => {
    const annotationById = annotations.find((a) => a.id === id);
    if (!annotationById) throw new Error("Annotation not found");

    const newAnnotationArray = annotations.filter((a) => a.id !== id);
    newAnnotationArray.push({ id, ...annotation });

    setAnnotations(newAnnotationArray);
  };

  const deleteAnnotation: AnnotationProvider["deleteAnnotation"] = (id) => {
    const newAnnotationArray = annotations.filter((a) => a.id !== id);

    setAnnotations(newAnnotationArray);
  };

  return (
    <AnnotationContext.Provider
      value={{ annotations, addAnnotation, updateAnnotation, deleteAnnotation }}
    ></AnnotationContext.Provider>
  );
}
