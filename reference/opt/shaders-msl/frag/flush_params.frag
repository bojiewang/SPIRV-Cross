#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct Structy
{
    float4 c;
};

constant Structy _47 = {};

struct main0_out
{
    float4 FragColor [[color(0)]];
};

fragment main0_out main0()
{
    main0_out out = {};
    out.FragColor = float4(10.0);
    return out;
}

