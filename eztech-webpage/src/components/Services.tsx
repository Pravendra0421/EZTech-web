import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Laptop,
  Cloud,
  Brain,
  BarChart,
  Cpu,
  LineChart,
  Users,
} from "lucide-react";
import { services } from "../data/services";

const icons: Record<string, React.ComponentType> = {
  Laptop,
  Cloud,
  Brain,
  BarChart,
  Cpu,
  LineChart,
  Users,
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white
           sm:text-4xl lg:text-5xl mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto mb-16">
            Comprehensive technology solutions to transform your business
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[service.icon];
              const title = t(`services.items.${service.name}.title`);
              return (
                <div
                  key={index}
                  className="relative group bg-white p-6 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                  <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-100 text-sm">
                    {t(`services.items.${service.name}.subtitle`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
