import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Enhancer,
  ImageIcon,
  MotionTransfer,
  Realtime,
  Train,
  Video,
  VideoLipsync,
} from "@/hooks/use-icon";
import { ChevronDown } from "lucide-react";

const tools = [
  {
    id: "image",
    name: "Image",
    description: "Generate images with custom styles in Flux and ideogram.",
    icon: ImageIcon,
    badge: "New",
    badgeVariant: "default" as const,
    bg: "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
  },
  {
    id: "video",
    name: "Video",
    description: "Generate videos with Haiper, Pica, Runway, Luma and more",
    icon: Video,
    badge: null,
    badgeVariant: null,
    bg: "oklch(79.55% .1875 75.3501)",
  },
  {
    id: "realtime",
    name: "Real-time",
    description: "Realtime Ai rendering on a canvas. Instant feedback loops",
    icon: Realtime,
    badge: null,
    badgeVariant: null,
    bg: "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
  },
  {
    id: "enhancer",
    name: "Enhancer",
    description: "Upscale and enhance your images and videos up to 22K.",
    icon: Enhancer,
    badge: "New",
    badgeVariant: "default" as const,
    bg: "linear-gradient(0deg, rgb(136, 136, 136) 0%, rgb(0, 0, 0) 100%)",
  },
  {
    id: "edit",
    name: "Edit",
    description: "Add objects, change styles or expand photos and generations",
    icon: Edit,
    badge: "New",
    badgeVariant: "default" as const,
    bg: "linear-gradient(0deg, rgb(174, 145, 202) 0%, rgb(89, 42, 133) 60%, rgb(24, 7, 40) 100%)",
  },

  {
    id: "video-lipsync",
    name: "Video Lipsync",
    description: "Lipsync any video to any audio",
    icon: VideoLipsync,
    badge: "New",
    badgeVariant: "default" as const,
    bg: "linear-gradient(0deg, rgb(187, 202, 145) 0%, rgb(60, 135, 143) 60%, rgb(7, 40, 15) 100%)",
  },
  {
    id: "motion-transfer",
    name: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: MotionTransfer,
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "train",
    name: "Train",
    description: "Train krea to replicate your style, products and characters.",
    icon: Train,
    badge: null,
    badgeVariant: null,
  },
];

export function ToolsGrid() {
  return (
    <div className="w-full px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Generate</h2>
        <Button variant="ghost" size="sm" className="text-accent-blue">
          <ChevronDown className="h-4 w-4" />
          Show all
        </Button>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Card
              key={tool.id}
              className="relative hover:shadow-md transition-shadow cursor-pointer bg-tool-card"
            >
              <CardContent className="p-4">
                <div className="w-full flex flex-col lg:flex-row items-start gap-2 justify-between mb-3">
                  {/* Icon with custom bg */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: tool.bg ?? "var(--accent)",
                    }}
                  >
                    <Icon className="text-white" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm">{tool.name}</h3>
                      {tool.badge && (
                        <Badge
                          variant={tool.badgeVariant}
                          className="text-xs text-white"
                        >
                          {tool.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-xs h-8 bg-accent rounded-full hover:bg-accent/50"
                  >
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
