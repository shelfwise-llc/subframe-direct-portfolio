import React from "react";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { LinkButton } from "@/ui/components/LinkButton";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherMessageSquare } from "@subframe/core";

function SampleTemplate() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-4 bg-default-background py-12">
        <div className="flex w-full items-center gap-4 border-b border-solid border-neutral-border px-8 py-4">
          <div className="flex grow shrink-0 basis-0 items-center gap-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Tom Peters
            </span>
          </div>
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Projects
          </Button>
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Writing
          </Button>
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            About
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-12 rounded-md bg-neutral-50 px-6 py-6">
          <div className="flex w-full flex-col items-start gap-6">
            <span className="whitespace-pre-wrap text-heading-1 font-heading-1 text-default-font">
              {
                "I'm Alex,\nDesigner with a focus on rapid prototyping, product workflows, and shipping meaningful products."
              }
            </span>
            <span className="whitespace-pre-wrap text-body font-body text-neutral-700">
              {
                "As the founding designer at Simple Formations turned Product Lead, I've worn many hats, designer, builder, strategist, and manager. One day I'm sketching wireframes, the next I'm mapping compliance workflows or rallying the team. A decade in the game has taught me to set strong product foundations, keep momentum, and turn chaos into order. That adaptability shaped Simple Formations into a platform that now helps businesses cut compliance processes by 90%."
              }
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="brand-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Email
              </Button>
              <Button
                variant="brand-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                LinkedIn
              </Button>
              <span className="text-body font-body text-neutral-500">
                me, or view some recent projects:
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-8">
            <div className="flex w-full flex-col items-start gap-4">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Product at incident.io
              </span>
              <span className="text-body font-body text-neutral-700">
                During my time at incident.io, I led a series of large projects,
                including their big bet on AI Investigations. I also spearheaded
                the creation and rollout of a cohesive design system, and was
                the hiring manager across Product and Brand Design.
              </span>
            </div>
            <div className="flex w-full items-center gap-6">
              <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
                />
                <div className="flex w-full flex-col items-start gap-2 px-6 py-6">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    AI Investigations
                  </span>
                  <span className="text-body font-body text-neutral-700">
                    Leading the design of AI-powered incident management tools
                  </span>
                  <LinkButton
                    variant="brand"
                    iconRight={<FeatherArrowRight />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View case study
                  </LinkButton>
                </div>
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-50">
                <img
                  className="h-64 w-full flex-none object-cover"
                  src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
                />
                <div className="flex w-full flex-col items-start gap-2 px-6 py-6">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Design System
                  </span>
                  <span className="text-body font-body text-neutral-700">
                    Building a cohesive design language for incident management
                  </span>
                  <LinkButton
                    variant="brand"
                    iconRight={<FeatherArrowRight />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    View case study
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-96 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <IconWithBackground size="large" icon={<FeatherMessageSquare />} />
          <span className="text-heading-2 font-heading-2 text-default-font">
            Available for select projects
          </span>
          <span className="text-body font-body text-default-font">
            Looking for help with product strategy, design systems, or team
            building? Let&#39;s chat.
          </span>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default SampleTemplate;
