import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
    {
    name: 'Full encapsulations',
    description:
        'Enhance your home`s health and efficiency with our Full Crawlspace Encapsulation. Seal out moisture and pests, ensuring a safer, mold-free environment',
    icon: CloudArrowUpIcon,
    },
    {
    name: 'Partial Encapsulations',
    description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
    },
    {
    name: 'Sump Pump Install',
    description:
        'Secure your home against water damage with our expert Sump Pump Installation. Reliable, efficient solutions to keep your crawlspace dry and protected',
    icon: ArrowPathIcon,
    },
    {
    name: 'French drain system exterior/interior',
    description:
        'Optimize your home`s protection with Partial Crawlspace Encapsulation. Tailored to target key areas, it offers effective moisture and mold defense',
    icon: FingerPrintIcon,
    },
]

export default function Example(props) {
    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-blue-400">
                    {props.heading}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {props.title}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {props.paragraph}
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                ))}
                </dl>
            </div>

            {/* Buttons */}
            <div className="pt-10 flex items-center justify-center gap-x-6">
                <Link href="/contact" className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                </Link>

                <Link href="/service" className="text-sm font-semibold leading-6 text-gray-500">
                    Learn more <span aria-hidden="true">→</span>
                </Link>
            </div>

        </div>
    </div>
    )
}